{
	company_name: 'something',
	$templates_hidden: true,
	templates: {
		sections: {
			section: {
				title: '',
				$pieces_templatitator: '@@global.templates.pieces',
				pieces: []
			}
		},
		pieces: {
			header: {
				header: 'Header Text Here'
			}
		}
	}
}
