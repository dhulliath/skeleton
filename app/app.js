const url = require('url')
const swisseph = require('swisseph')
const coordinateTZ = require('coordinate-tz')
const moment = require('moment-timezone')

const local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)
	//localhost:5000/api/ephemeris?longitude=-123&latitude=49&year=1987&month=11&day=8&hour=16

	app.get('/natalchart/:latitude&:longitude/:year/:month([1-9]|1[0-2])/:day/:hour-:minute', natalChartPage)

	function natalChartPage(req, res) {
		function longitudeToZodiac(longitude) {
			var signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'saggitarius', 'capricorn', 'aquarius', 'pisces']
			while (longitude > 360) longitude -= 360
			while (longitude < 0) longitude += 360
			return signs[Math.floor(longitude / 30)]
		}

		function isWithinDegrees(longitude, minimum, maximum) {
			if (maximum > 360) {
				longitude += 360
			}
			if (longitude >= minimum && longitude < maximum) return true
			return false
		}

		function withinRange(number1, number2, allowedDeviation) {
			if (Math.abs(number1 - number2) <= allowedDeviation) return true
			return false
		}

		function getAspect(longitude1, longitude2) {
			var aspects = {
				'conjunction': {
					'degree': 0,
					'orb': 6
				},
				'opposition': {
					'degree': 180,
					'orb': 6
				},
				'trine': {
					'degree': 120,
					'orb': 6,
				},
				'square': {
					'degree': 90,
					'orb': 6
				},
				'sextile': {
					'degree': 60,
					'orb': 6
				}
			}
			while (longitude1 >= 360) longitude1 -= 360
			while (longitude2 >= 360) longitude2 -= 360
			var diff = Math.abs(longitude1 - longitude2)
			for (key in aspects) {
				if (withinRange(diff, aspects[key]['degree'], aspects[key]['orb'])) {
					return {
						'type': key,
						'orb': diff
					}
				}
			}
			return false
		}
function isDate(y,m,d)
{
var date = new Date(y,m-1,d);
var convertedDate =
""+date.getFullYear() + (date.getMonth()+1) + date.getDate();
var givenDate = "" + y + m + d;
return ( givenDate == convertedDate);
}

		var debug = false
		var queryObjects = {
			'sun': swisseph.SE_SUN,
			'moon': swisseph.SE_MOON,
			'mercury': swisseph.SE_MERCURY,
			'venus': swisseph.SE_VENUS,
			'mars': swisseph.SE_MARS,
			'jupiter': swisseph.SE_JUPITER,
			'saturn': swisseph.SE_SATURN,
			'uranus': swisseph.SE_URANUS,
			'neptune': swisseph.SE_NEPTUNE,
			'pluto': swisseph.SE_PLUTO,
			'northnode': swisseph.SE_TRUE_NODE,
			'blackmoonlilith': swisseph.SE_MEAN_APOG
		}
		var sFlags = swisseph.SEFLG_SPEED
		var calcData = {
			'planets': {},
			'houses': {}
		}
		var requestVars = url.parse(req.url, true).query

		var dateLocal = {
			'year': parseInt(req.params.year) || parseInt(requestVars.year),
			'month': (parseInt(req.params.month) - 1),
			'day': parseInt(req.params.day) || parseInt(requestVars.day),
			'hour': parseInt(req.params.hour) || parseInt(requestVars.hour),
			'minute': parseInt(req.params.minute) || parseInt(requestVars.minute),
		}

		if (!isDate(dateLocal.year, dateLocal.month, dateLocal.day)) {
			res.send('bad date')
			return false
		}

		var geography = {
			'longitude': parseInt(req.params.longitude) || parseInt(requestVars.longitude),
			'latitude': parseInt(req.params.latitude) || parseInt(requestVars.latitude)
		}
		try {
			var DateObj = new Date(moment.tz(dateLocal, coordinateTZ.calculate(geography.latitude, geography.longitude).timezone))
			var dateGMT = {
				'year': DateObj.getUTCFullYear(),
				'month': DateObj.getUTCMonth(),
				'day': DateObj.getUTCDate(),
				'hour': DateObj.getUTCHours(),
				'minute': DateObj.getUTCMinutes()
			}
			//calculate julian date from GMT of inputted year
			dateGMT.julian = swisseph.swe_julday(dateGMT.year, dateGMT.month + 1, dateGMT.day, dateGMT.hour + (dateGMT.minute / 60), swisseph.SE_GREG_CAL)
			dateGMT.sidereal = swisseph.swe_sidtime(dateGMT.julian).siderialTime
		} catch (err) {
			//res.send(err)
			//return false
		}


		try {
			//calculate houses
			var houses = swisseph.swe_houses(dateGMT.julian, geography.latitude, geography.longitude, 'P')
			//send raw house data
			if (debug) calcData['houses']['raw'] = houses

			//get planetary data for each object specified in queryObjects
			for (key in queryObjects) {
				var temp = swisseph.swe_calc_ut(dateGMT.julian, queryObjects[key], sFlags)
				calcData['planets'][key] = {
					'id': key,
					'house': null,
					'longitude': temp.longitude,
					'speed': temp.longitudeSpeed,
					'zodiac': longitudeToZodiac(temp.longitude)
				}
				if (debug) calcData['planets'][key]['raw'] = temp

			}
		} catch (err) {
			console.log('swisseph fucked up')
		}

		//create a fake 13th house for width calculation
		houses.house[12] = houses.house[0] + 360
		//iterate houses and crunch some numbers
		for (key = 0; key < 12; key++) {
			calcData['houses'][parseInt(key) + 1] = {
				'id': key,
				'longitude': houses.house[key],
				'width': houses.house[parseInt(key) + 1] - houses.house[key],
				'zodiac': longitudeToZodiac(houses.house[key])
			}
			//iterate planets to determine their house
			for (pKey in calcData['planets']) {
				if (isWithinDegrees(calcData['planets'][pKey]['longitude'], houses.house[key], houses.house[parseInt(key) + 1])) {
					calcData['planets'][pKey]['house'] = parseInt(key) + 1
				}
			}
		}

		//set ascendant data from house1
		calcData['planets']['ascendant'] = {
			'longitude': houses.ascendant,
			'zodiac': longitudeToZodiac(houses.ascendant)
		}
		//set midheaven data from house10
		calcData['planets']['midheaven'] = {
			'longitude': houses.mc,
			'zodiac': longitudeToZodiac(houses.mc)
		}

		//iterate planets twice to determine aspects
		for (pKey1 in calcData['planets']) {
			for (pKey2 in calcData['planets']) {
				if (pKey1 != pKey2) {
					var aspect = getAspect(calcData['planets'][pKey1]['longitude'], calcData['planets'][pKey2]['longitude'])
					if (aspect) {
						if (!calcData['planets'][pKey1]['aspects']) calcData['planets'][pKey1]['aspects'] = []
						calcData['planets'][pKey1]['aspects'].push({
							'target': pKey2,
							'type': aspect.type,
							'orb': aspect.orb
						})
					}
				}
			}
		}
		//now dress up the data nicely and render
		var returnData = {
			'planets': [],
			'houses': []
		}
		for (pKey in calcData['planets']) {
			var oldObj = calcData['planets'][pKey]
			var newObj = {
				'id': pKey,
				'longitude': oldObj['longitude'],
				'data': '@@global.natalchart.' + pKey,
				'zodiac': '@@global.natalchart.' + pKey + '.zodiac.' + oldObj['zodiac'],
				'zodiacR': '@@global.natalchart.names.zodiac.' + oldObj['zodiac'],
				'house': '@@global.natalchart.' + pKey + '.houses.' + oldObj['house'],
				'houseR': '@@global.natalchart.names.house.' + oldObj['house'],
				'aspects': oldObj['aspects']
			}
			returnData.planets.push(newObj)
		}
		for (hKey in calcData['houses']) {
			returnData.houses.push(calcData['houses'][hKey])
		}
		
		//res.send(calcData)
		enduro.api.temper.render('natalchart', returnData)
			.then((output) => {
				res.send(output)
			})
	}
}

module.exports = new local_app()