{
	$orrery_hidden: false,
	$orrery_expander: true,
	orrery: {
		attributes: {
			$element_size: 4,
			$quality_size: 4,
			element: {
				fire: {
					name: 'Fire'
				},
				air: {
					name: 'Air'
				},
				water: {
					name: 'Water'
				},
				earth: {
					name: 'Earth'
				}
			},
			quality: {
				cardinal: {
					name: 'Cardinal'
				},
				fixed: {
					name: 'Fixed'
				},
				mutable: {
					name: 'Mutable'
				}
			}
		},
		planet_type: {
			planet: {
				$names_noframe: true,
				$names_size: 4,
				names: {
					id: '',
					display_name: ''
				},
				$sizes_noframe: true,
				$sizes_size: 4,
				sizes: {
					radius: '',
					orb: '',
					scale: 100
				},
				$colors_noframe: true,
				$colors_size: 4,
				colors: {
					$main_type: 'colorpicker',
					main: '',
					$accent_type: 'colorpicker',
					accent: ''
				}
			}
		},
		zodiac_type: {
			zodiac: {
				$name_size: 12,
				name: '',
				$colors_size: 3,
				colors: {
					$main_type: 'colorpicker',
					main: '',
					$accent_type: 'colorpicker',
					accent: ''
				},
				$planets_size: 3,
				planets: {
					ruler: '',
					exaltation: '',
					detriment: '',
					fall: ''
				},
				$attribute_size: 3,
				attribute: {
					element: '@@orrery.attributes.element.fire',
					quality: '@@orrery.attributes.quality.fixed'
				},
				$data_size: 3,
				data: {
					glyph: '',
					order: 1
				}
			}
		}
	},
	$page_noframe: true,
	page: {
		navigation_color: '@@global.styling.colors.grey',
		subnavigation_color: '@@global.styling.colors.brown'
	},
	$planets_templatitator: '@@orrery.planet_type',
	$planets_size: 6,
	$planets_expander: true,
	planets: [{
			$names_noframe: true,
			$names_size: 4,
			names: {
				id: 'sun',
				display_name: 'Sola'
			},
			$sizes_noframe: true,
			$sizes_size: 4,
			sizes: {
				radius: '3850',
				orb: '145',
				scale: 100
			},
			$colors_noframe: true,
			$colors_size: 4,
			colors: {
				$main_type: 'colorpicker',
				main: '#ffff00',
				$accent_type: 'colorpicker',
				accent: '#ff8000'
			}
		},
		{
			$names_noframe: true,
			$names_size: 4,
			names: {
				id: 'moon',
				display_name: 'Luna'
			},
			$sizes_noframe: true,
			$sizes_size: 4,
			sizes: {
				radius: '3650',
				orb: '145',
				scale: 100
			},
			$colors_noframe: true,
			$colors_size: 4,
			colors: {
				$main_type: 'colorpicker',
				main: '#ffffff',
				$accent_type: 'colorpicker',
				accent: '#0080ff'
			}
		},
		{
			$names_noframe: true,
			$names_size: 4,
			names: {
				id: 'mercury',
				display_name: 'Hermes'
			},
			$sizes_noframe: true,
			$sizes_size: 4,
			sizes: {
				radius: '3480',
				orb: '125',
				scale: '80'
			},
			$colors_noframe: true,
			$colors_size: 4,
			colors: {
				$main_type: 'colorpicker',
				main: '#804040',
				$accent_type: 'colorpicker',
				accent: '#ffc000'
			}
		},
		{
			$names_noframe: true,
			$names_size: 4,
			names: {
				id: 'venus',
				display_name: 'Aphrodite'
			},
			$sizes_noframe: true,
			$sizes_size: 4,
			sizes: {
				radius: '3320',
				orb: '125',
				scale: '80'
			},
			$colors_noframe: true,
			$colors_size: 4,
			colors: {
				$main_type: 'colorpicker',
				main: '#00ff00',
				$accent_type: 'colorpicker',
				accent: '#008000'
			}
		}
	],
	$zodiacs_templatitator: '@@orrery.zodiac_type',
	$zodiacs_expander: true,
	$zodiacs_size: 12,
	zodiacs: [{
			$name_size: 12,
			name: 'Aries',
			$colors_size: 3,
			colors: {
				$main_type: 'colorpicker',
				main: '#ff0000',
				$accent_type: 'colorpicker',
				accent: '#800000'
			},
			$planets_size: 3,
			planets: {
				ruler: 'Mars',
				exaltation: 'Sun',
				detriment: 'Venus',
				fall: 'Saturn'
			},
			$attribute_size: 3,
			attribute: {
				element: '@@orrery.attributes.element.fire',
				quality: '@@orrery.attributes.quality.cardinal'
			},
			$data_size: 3,
			data: {
				glyph: 'M5221 505c-38-50-105-71-163-52C5033 462 5013 477 4999 497c-14-18-34-32-57-40C4883 437 4816 458 4779 508c-36 48-32 94-21 124 12 33 37 64 56 69 15 4 31-5 35-21 3-13-3-27-15-33-5-4-22-23-26-48-3-19 2-38 17-56 23-30 64-43 98-32 31 10 48 38 48 79V822v3c0 16 13 29 29 29 16 0 29-13 29-29V822 590v-4c0-40 17-68 48-78 35-12 76 2 98 31 14 18 19 37 17 56-4 26-21 44-26 49-12 6-19 19-15 32 4 15 19 25 35 21 19-5 45-37 56-69C5253 598 5258 553 5221 505z',
				order: 1
			}
		},
		{
			$name_size: 12,
			name: 'Taurus',
			$colors_size: 3,
			colors: {
				$main_type: 'colorpicker',
				main: '#ff80c0',
				$accent_type: 'colorpicker',
				accent: '#ff0080'
			},
			$planets_size: 3,
			planets: {
				ruler: 'Venus',
				exaltation: 'Moon',
				detriment: 'Pluto',
				fall: 'Uranus'
			},
			$attribute_size: 3,
			attribute: {
				element: '@@orrery.attributes.element.earth',
				quality: '@@orrery.attributes.quality.fixed'
			},
			$data_size: 3,
			data: {
				glyph: 'M5219 407h-1c-4 0-101 2-171 123-14-4-29-6-44-5-17 0-33 3-49 6C4883 409 4786 407 4781 407c0 0 0 0 0 0C4764 407 4750 421 4750 438 4750 456 4763 470 4781 470c3 0 65 3 116 89-47 33-78 88-78 150 0 101 83 184 184 184 101 0 184-83 184-184 0-64-32-120-82-153 50-82 110-85 114-86C5236 470 5250 456 5250 439 5250 422 5236 407 5219 407zM5003 830c-67 0-121-54-122-121S4936 588 5003 588c67 0 121 54 121 121C5124 775 5069 830 5003 830z',
				order: '2'
			}
		}
	]
}