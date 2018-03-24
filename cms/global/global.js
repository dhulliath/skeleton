{
	company_name: 'something',
	$templates_hidden: true,
	templates: {
		sections: {
			one_column: {
				title: '',
				$pieces_templatitator: '@@global.templates.pieces',
				$pieces_size: 12,
				pieces: []
			},
			two_column: {
				title: '',
				$left_templatitator: '@@global.templates.pieces',
				$left_size: 12,
				left: [],
				$right_templatitator: '@@global.templates.pieces',
				$right_size: 12,
				right: []
			}
		},
		pieces: {
			header: {
				header: 'Header Text Here',
				header_size: '@@global.styling.special.headers.middle',
				$styling_expander: true,
				styling: {
					$text_size: 4,
					$text_noframe: true,
					text: {
						color: '@@global.styling.color.default',
						alignment: '@@global.styling.text.alignment.default'
					},
					$positioning_size: 4,
					$positioning_noframe: true,
					positioning: {
						anchor: '@@global.styling.position.anchor.left',
						size: '@@global.styling.position.size.full'
					},
					$decorations_size:4,
					$decorations_noframe: true,
					decorations: {
						border: '@@global.styling.decorations.border.none'
					}
				}
			},
			text: {
				body: '',
				$body_type: 'textarea'
			}
		}
	},
	$styling_expander: true,
	styling: {
		title: 'Don\'t touch anything unless you\'re sure about what you\'re doing!',
		$title_type: 'title',
		position: {
			anchor: {
				over_left: {classes:['anch-left', 'anch-over']},
				left: {classes: ['anch-left']},
				right: {classes: ['anch-right']},
				over_right: {classes: ['anch-right', 'anch-over']}

			},
			size: {
				full: {classes:['wd-full']},
				half: {classes:['wd-half']},
				third: {classes:['wd-third']}
			}
		},
		decorations: {
			border: {
				none: {classes:[]},
				all: {classes:['bdr-all']},
				left: {classes:['bdr-left']},
				right: {classes:['bdr-right']},
				top: {classes:['bdr-top']},
				bottom: {classes:['bdr-bottom']}
			}
		},
		text: {
			alignment: {
				default: {classes:['txt-al-justify']},
				left: {classes:['txt-al-left']},
				right: {classes:['txt-al-right']},
				center: {classes:['txt-al-center']},
				justify: {classes:['txt-al-justify']}
			},
			size: {
				normal: {classes:['txt-sz-normal']},
				big: {classes:['txt-sz-big']},
				huge: {classes:['txt-sz-huge']}
			}
		},
		color: {
			default: {classes:['']},
			accent: {classes:['col-accent']},
			trim: {classes:['col-trim']}
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
}
