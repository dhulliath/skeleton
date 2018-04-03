/*
// Automatically assembles a globalizer valid object from an array of user defined values
// Expects optionated to be an array of pairs,
// name of target key is the array key,
// value of target key is the value which will be available to select
// Example:
{
	settings: [
		{
			name: 'test'
		},
		{
			name: 'one',
		},
		{
			name: 'two'
		}
	],
	optionated: {
		settings: 'name'
	}
}
//This will add the following key to the context:
{
	settings_optionated: {
		name: {},
		one: {},
		two: {}
	}
}
*/

const abstractor = function () {}

function generateOptions(context, target, frontvalue) {
	return new Promise(function(resolve, reject) {
		if (!context[target]) reject('missing target: '+target)

		let optionObject = {}
		for (key in context[target]) {
			optionObject[context[target][key][frontvalue]] = context[target][key]
		}
		context[target+'_optionated'] = optionObject
		resolve()
	})
}

abstractor.prototype.init = function (context) {
	return new Promise(function (resolve, reject) {
		resolve()
	})
}

abstractor.prototype.abstract = function (context) {
	let promises = []
	for (key in context.optionated) {
		promises.push(generateOptions(context, key, context.optionated[key]))
	}
	return Promise.all(promises)
}

module.exports = new abstractor()