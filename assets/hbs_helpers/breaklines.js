const helper = function () {}

// vendor dependency
//const _ = require('lodash')

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('breaklines', function (text) {

        var result = "<p>" + text + "</p>";
        result = result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
        result = result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
        return result;
	})
}

module.exports = new helper()