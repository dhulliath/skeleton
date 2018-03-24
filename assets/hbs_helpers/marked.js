var marked = require('marked')
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: true,
	sanitize: true,
	smartLists: true,
	smartypants: false
})

const helper = function() {}
helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('marked', function (text) {
        return marked(text)
    })
}

module.exports = new helper()