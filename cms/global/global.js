({
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
				header_size: '@@global._styling.special.headers.middle',
				style: '@@global.styles.header_one'
			},
			text: {
				body: '',
				$body_type: 'textarea',
				style: '@@global.styles.body_one'
			},
			lorem: {
				lorem: 'Ipsum Lorem Paragraph',
				$lorem_type: 'title',
				style: '@@global.styles.body_two'
			}
		}
	}
})