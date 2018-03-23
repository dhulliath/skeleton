({
	greeting: 'you!',
	superlative: 'nice',
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
					$style_expander: true,
					style: {
						$text_size: 4,
						text: {
							color: '@@global.styling.color.accent',
							alignment: '@@global.styling.text.alignment.justify'
						}
					}
				}
			]
		}
	]
})