const deepmerge = require('deepmerge')

const abstractor = function () {}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        var defContext = {
            $text_size: 4,
            $text_noframe: true,
            text: {
                color: '@@global._styling.color.default',
                alignment: '@@global._styling.text.alignment.default',
                font: ''
            },
            $positioning_size: 4,
            $positioning_noframe: true,
            positioning: {
                anchor: '@@global._styling.position.anchor.left',
                margin: '@@global._styling.position.margin.none',
                size: '@@global._styling.position.size.full'
            },
            $decorations_size: 4,
            $decorations_noframe: true,
            decorations: {
                background_color: '@@global._styling.color.default',
                border: '@@global._styling.decorations.border.none',
                border_color: '@@global._styling.color.default',
                rounding: '@@global._styling.decorations.rounding.none'
            }
        }
        var newContext = deepmerge.all([defContext, context.styling])

        context['$styling_expander'] = true
        context.styling = newContext

        return resolve()
    })
}

abstractor.prototype.init = function (context) {
	return new Promise(function (resolve, reject) {
		// initialize abstractor
		resolve()
	})
}

module.exports = new abstractor()