const jsonSass = require('json-sass')
const fs = require('fs-extra')
const Readable = require('stream').Readable
const path = require('path')

const flat_helpers = require(enduro.enduro_path + '/libs/flat_db/flat_helpers')
const gulp_tasks = require(enduro.enduro_path + '/libs/build_tools/gulp_tasks')


const abstractor = function () {}



abstractor.prototype.init = function (context) {
	return new Promise(function (resolve, reject) {
		// initialize abstractor
		resolve()
	})
}

abstractor.prototype.abstract = function (context) {
	return new Promise(function (resolve, reject) {
		if (!context.sass_file) {context.sass_file = ''}
		if (!context.sass_prefix) {context.sass_prefix = ''}

		var prefix = ['$', context.sass_prefix || 'json', ': '].join('')

		var jsStream = new Readable
		jsStream.push(JSON.stringify(context.sass))
		jsStream.push(null)
		if (context.sass_file) {
			let targetFile = path.join(enduro.project_path, 'assets', 'css', context.sass_file+'.scss')
			flat_helpers.ensure_directory_existence(targetFile)
			jsStream.pipe(jsonSass({prefix: prefix})).pipe(fs.createWriteStream(targetFile).on('finish', function() {
				gulp_tasks.task('production', ['css_handler'])
			}))
		}
		return resolve()

	})
}

module.exports = new abstractor()
