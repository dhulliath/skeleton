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
			},
			two_columns: {
				$left_column_size: 12,
				$right_column_size: 12,
				$left_column_expander: true,
				$right_column_expander: true,
				left_column: [],
				right_column: []
			}
		}
	},
	$styling_expander: true,
	styling: {
		title: 'Don\'t touch anything unless you\'re sure about what you\'re doing!',
		$title_type: 'title',
		position: {
			size: {
				full: 'wd-full',
				half: 'wd-half',
				third: 'wd-third'
			}
		},
		text: {
			alignment: {
				default: 'txt-al-justify',
				left: 'txt-al-left',
				right: 'txt-al-right',
				center: 'txt-al-center',
				justify: 'txt-al-justify'
			},
			size: {
				normal: 'txt-sz-normal',
				big: 'txt-sz-big',
				huge: 'txt-sz-huge'
			}
		},
		color: {
			default: '',
			accent: 'col-accent',
			trim: 'col-trim'
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
