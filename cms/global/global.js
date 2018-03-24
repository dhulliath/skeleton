{
	company_name: 'something',
	$templates_hidden: true,
	templates: {
		sections: {
			section: {
				title: '',
				$pieces_templatitator: '@@global.templates.pieces',
				$pieces_size: 12,
				pieces: []
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
						title: 'Text',
						$title_type: 'title',
						color: '@@global.styling.color.default',
						alignment: '@@global.styling.text.alignment.default'
					},
					$positioning_size: 4,
					$positioning_noframe: true,
					positioning: {

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
			size: {
				full: {classes:['wd-full']},
				half: {classes:['wd-half']},
				third: {classes:['wd-third']}
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
