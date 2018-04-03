({
	sass: {
		color: {
			accent: '#000066',
			trim: '#ff0066'
		},
		margins: {
			small: '1em',
			medium: '2em',
			large: '3em',
			huge: '4em'
		},
		rounding: {
			small: '1em',
			medium: '2em',
			large: '3em',
			circle: '50%'
		},
		text: {
			alignments: [
				'left',
				'right',
				'center',
				'justify'
			],
			sizes: {
				normal: '1em',
				medium: '2em',
				large: '3em'
			},
			fonts: [
				'Oswald',
				'Comfortaa',
				'Dosis',
				'Padauk'
			]
		}
	},
	sass_prefix: 'theme',
	sass_file: '_uservars',
	styles: {
		body_one: {
			styling: {
				$text_size: 4,
				$text_noframe: true,
				text: {
					color: '@@global._styling.color.default',
					alignment: '@@global._styling.text.alignment.justify',
					font: 'Oswald'
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
			},
			$styling_expander: true
		},
		body_two: {
			styling: {
				$text_size: 4,
				$text_noframe: true,
				text: {
					color: '@@global._styling.color.default',
					alignment: '@@global._styling.text.alignment.justify',
					font: 'Padauk'
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
			},
			$styling_expander: true
		},
		body_three: {
			styling: {
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
			},
			$styling_expander: true
		},
		header_one: {
			styling: {
				$text_size: 4,
				$text_noframe: true,
				text: {
					color: '@@global._styling.color.accent',
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
			},
			$styling_expander: true
		},
		header_two: {
			styling: {
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
			},
			$styling_expander: true
		},
		header_three: {
			styling: {
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
			},
			$styling_expander: true
		},
		aside_one: {
			styling: {
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
					anchor: '@@global._styling.position.anchor.right',
					margin: '@@global._styling.position.margin.small',
					size: '@@global._styling.position.size.third'
				},
				$decorations_size: 4,
				$decorations_noframe: true,
				decorations: {
					background_color: '@@global._styling.color.default',
					border: '@@global._styling.decorations.border.none',
					border_color: '@@global._styling.color.default',
					rounding: '@@global._styling.decorations.rounding.none'
				}
			},
			$styling_expander: true
		},
		aside_two: {
			styling: {
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
			},
			$styling_expander: true
		},
		aside_three: {
			styling: {
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
			},
			$styling_expander: true
		}
	},
	$_styling_hidden: true,
	_styling: {
		text: {
			alignment: {
				default: {
					classes: [
						'txt-al-justify'
					]
				},
				left: {
					classes: [
						'txt-al-left'
					]
				},
				right: {
					classes: [
						'txt-al-right'
					]
				},
				center: {
					classes: [
						'txt-al-center'
					]
				},
				justify: {
					classes: [
						'txt-al-justify'
					]
				}
			},
			line_height: {
				single: {
					classes: ['txt-lh-single']
				},
				one_and_half: {
					classes: ['txt-lh-singlehalf']
				},
				double: {
					classes: ['txt-lh-double']
				}
			},
			size: {
				normal: {
					classes: [
						'txt-sz-normal'
					]
				},
				big: {
					classes: [
						'txt-sz-big'
					]
				},
				huge: {
					classes: [
						'txt-sz-huge'
					]
				}
			}
		},
		decorations: {
			border: {
				none: {
					classes: []
				},
				all: {
					classes: [
						'bdr-all'
					]
				},
				left: {
					classes: [
						'bdr-left'
					]
				},
				right: {
					classes: [
						'bdr-right'
					]
				},
				top: {
					classes: [
						'bdr-top'
					]
				},
				bottom: {
					classes: [
						'bdr-bottom'
					]
				}
			},
			rounding: {
				none: {
					classes: []
				},
				small: {
					classes: [
						'bdr-rnd-small'
					]
				},
				medium: {
					classes: [
						'bdr-rnd-medium'
					]
				},
				large: {
					classes: [
						'bdr-rnd-large'
					]
				}
			}
		},
		position: {
			anchor: {
				over_left: {
					classes: [
						'anch-left',
						'anch-over'
					]
				},
				left: {
					classes: [
						'anch-left'
					]
				},
				right: {
					classes: [
						'anch-right'
					]
				},
				over_right: {
					classes: [
						'anch-right',
						'anch-over'
					]
				}
			},
			margin: {
				none: {
					classes: []
				},
				small: {
					classes: [
						'mrgn-small'
					]
				}
			},
			size: {
				full: {
					classes: [
						'wd-full'
					]
				},
				half: {
					classes: [
						'wd-half'
					]
				},
				third: {
					classes: [
						'wd-third'
					]
				}
			}
		},
		color: {
			default: {
				classes: []
			},
			accent: {
				classes: [
					'col-accent'
				]
			},
			trim: {
				classes: [
					'col-trim'
				]
			}
		},
		special: {
			headers: {
				biggest: 'h1',
				bigger: 'h2',
				middle: 'h3',
				smaller: 'h4',
				smallest: 'h5'
			}
		}
	}
})