{
	$navigation_noframe: true,
	navigation: {
		$templates_hidden: true,
		templates: {
			layer1_type: {
				item: {
					title: '',
					href: '',
					$items_size: 6,
					$items_templatitator: '@@navigation.templates.layer2_type',
					items: []
				}
			},
			layer2_type: {
				subitem: {
					title: '',
					href: '',
					$items_size: 12,
					$items_templatitator: '@@navigation.templates.layer3_type',
					items: []
				}
			},
			layer3_type: {
				subitem: {
					title: '',
					href: ''
				}
			}
		},
		$items_templatitator: '@@navigation.templates.layer1_type',
		$items_size: 12,
		items: [
			{
				title: 'News',
				href: '/news/',
				$items_size: 6,
				$items_templatitator: '@@navigation.templates.layer2_type',
				items: []
			},
			{
				title: 'Portfolio',
				href: '#',
				$items_size: 6,
				$items_templatitator: '@@navigation.templates.layer2_type',
				items: [
					{
						title: 'Clients',
						href: '/article/portfolio-clients/',
						$items_size: 12,
						$items_templatitator: '@@navigation.templates.layer3_type',
						items: []
					},
					{
						title: 'Orrery',
						href: '/orrery/',
						$items_size: 12,
						$items_templatitator: '@@navigation.templates.layer3_type',
						items: []
					}
				]
			},
			{
				title: 'Services',
				href: '#',
				$items_size: 6,
				$items_templatitator: '@@navigation.templates.layer2_type',
				items: [
					{
						title: 'Phone',
						href: '/article/service-phone/',
						$items_size: 12,
						$items_templatitator: '@@navigation.templates.layer3_type',
						items: []
					},
					{
						title: 'Web Development',
						href: '/article/service-web-development/',
						$items_size: 12,
						$items_templatitator: '@@navigation.templates.layer3_type',
						items: []
					}
				]
			},
			{
				title: 'Software',
				href: '#',
				$items_size: 6,
				$items_templatitator: '@@navigation.templates.layer2_type',
				items: [
					{
						title: 'Steam Commander',
						href: '/article/program-steam-commander/',
						$items_size: 12,
						$items_templatitator: '@@navigation.templates.layer3_type',
						items: []
					}
				]
			},
			{
				title: 'Contact',
				href: '/article/contact/',
				$items_size: 6,
				$items_templatitator: '@@navigation.templates.layer2_type',
				items: []
			}
		]
	}
}