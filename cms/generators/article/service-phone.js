{
	title: 'Phone Services',
	$details_expander: true,
	details: {
		$image_type: 'image',
		image: '/remote/direct_uploads/1513977376_aurora_by_nmsmith-d7i1w5y.jpg'
	},
	$sections_templatitator: '@@global.article_item_types',
	$sections_size: 12,
	sections: [
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Markdown',
			$doc_type: 'textarea',
			doc: '### What is VoIP\n\nVoice over IP is a technology designed to provide near-realtime voice over the internet. Simply put, internet phonecalls.\n\n### Options\n\n+ I set up your phones once, charge a flat rate, then let you roam free.\n+ I do the above, then charge a monthly rate to continue maintenance.',
			$abstracted_content_hidden: true,
			abstracted_content: {
				marked_doc: '<h3 id="what-is-voip">What is VoIP</h3>\n<p>Voice over IP is a technology designed to provide near-realtime voice over the internet. Simply put, internet phonecalls.</p>\n<h3 id="options">Options</h3>\n<ul>\n<li>I set up your phones once, charge a flat rate, then let you roam free.</li>\n<li>I do the above, then charge a monthly rate to continue maintenance.</li>\n</ul>\n',
				contents: [
					{
						heading: 'What is VoIP',
						level: '3',
						link: 'what-is-voip'
					},
					{
						heading: 'Options',
						level: '3',
						link: 'options'
					}
				]
			}
		},
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Image',
			$graphic_noframe: true,
			$graphic_size: 4,
			graphic: {
				$image_type: 'image',
				image: '/remote/direct_uploads/1513977654_tulips_island_ii_by_razielmb-d7e2oqy.png'
			},
			$styling_noframe: true,
			$styling_size: 4,
			styling: {
				size: '@@global.styling.sizing_extended.large',
				floating: '@@global.styling.float.center'
			},
			$bordering_noframe: true,
			$bordering_size: 4,
			bordering: {
				border: '@@global.styling.borders.all',
				border_color: '@@global.styling.colors.grey',
				rounded: true
			}
		}
	]
}