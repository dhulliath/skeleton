const _ = require('lodash')
const Promise = require('bluebird')
const logger = require(enduro.enduro_path + '/libs/logger')
const flat_helpers = require(enduro.enduro_path + '/libs/flat_db/flat_helpers')
const globalizer = require(enduro.enduro_path + '/libs/globalizer/globalizer')
const fs = require('fs')
const path = require('path')

enduro.templating_engine.registerHelper('news', function (options) {
    // will store all the news entries
    var news_entries
    //const max_posts = Number(options.data.root.max_number_of_entries_on_the_page)
    const max_posts = Number(10)
    // get_cms_list will return a structured list of all pages in a project
    return enduro.api.pagelist_generator.get_cms_list()
        .then((pagelist) => {

            // will store the promises from reading all the news entries
            var get_content_promises = []

            news_entries = _.chain(pagelist.structured.news)
                .filter((o) => { return typeof o === 'object' && !o.hidden}).value() // filter pages only

            // goes through all the news entries and loads their content
            for (page_id in news_entries) {
                var page = news_entries[page_id]

                function get_content (page) {
                    get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => { page.content = content }))
                }

                get_content(page)
            }

            return Promise.all(get_content_promises)
        })
        .then(() => {
            // show only published entries
            news_entries = news_entries.filter(entry => entry.content.publication.published)

            // sort dates by time and limit them
            news_entries.sort((a, b) => {
                return new Date(a.content.publication.date) < new Date(b.content.publication.date)
            })
            // add more pages with news entries (for pagination purposes)
            for (let i = max_posts, l = news_entries.length; i < l; i += max_posts) {
                let context = {
                    page_name: '/news/page/' + (i / max_posts + 1),
                    entries: news_entries.slice(i, i + max_posts),
                    first: false,
                    last: news_entries.length - i <= max_posts,
                    next_page: '/news/page/' + (i / max_posts + 2) + '/',
                    prev_page: i === max_posts? '/news/' : ('/news/page/' + (i / max_posts) + '/')
                }
                // copy index page params to other pages
                for (let i in options.data.root) {
                    context[i] = options.data.root[i]
                }
                // still replace copied pagename with appropriate one
                context._meta.pagename = context.page_name
                // drop `index.html` files in `page-N` folders so they can be served as static
                enduro.api.temper.render('news_nohelpers', context)
                .then(data => {
                    let folder = path.join(enduro.project_path, enduro.config.build_folder, context.page_name, 'index.html')
                    flat_helpers.ensure_directory_existence(folder)
                    .then(() => {
                        fs.writeFile(folder, data, function (err) {
                            if (err) {
                                return logger.err_block(err)
                            }
                            logger.twolog('news ' + context.page_name, 'created', 'enduro_render_events')
                        })
                    })
                    // console.log(data)
                })
            }

            // pass entries and nav info as context for the template
            paginator_info = {
                // show max of `max_posts` entries at a time
                entries: news_entries.slice(0, max_posts),
                first: true,
                last: news_entries.length <= max_posts,
                next_page: '/news/page/2/',
            }
            // copy index page params to news context for pagination
            for (let i in options.data.root) {
                paginator_info[i] = options.data.root[i]
            }

            return options.fn(paginator_info)
        })
})