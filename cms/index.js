({
	greeting: '',
	superlative: '',
	$sections_templatitator: '@@global.templates.sections',
	$sections_size: 12,
	sections: [
		{
			title: '',
			$pieces_templatitator: '@@global.templates.pieces',
			$pieces_size: 12,
			pieces: [
				{
					header: 'Header Text Here',
					header_size: '@@global._styling.special.headers.middle',
					style: '@@global.styles.header_one'
				},
				{
					lorem: 'Ipsum Lorem Paragraph',
					$lorem_type: 'title',
					style: '@@global.styles.body_one'
				},
				{
					lorem: 'Ipsum Lorem Paragraph',
					$lorem_type: 'title',
					style: '@@global.styles.body_two'
				}
			]
		}
	]
})