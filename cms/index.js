{
	$sections_templatitator: '@@global.article_item_types',
	$sections_noframe: true,
	$sections_size: 12,
	sections: [
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Header',
			header: 'Welcome',
			$styling_noframe: true,
			$styling_size: 4,
			styling: {
				size: '@@global.styling.sizing_basic.medium',
				anchor_link: false
			},
			$graphics_noframe: true,
			$graphics_size: 4,
			graphics: {
				color: '@@global.styling.colors.default',
				background: '@@global.styling.colors.default'
			},
			$bordering_noframe: true,
			$bordering_size: 4,
			bordering: {
				border: '@@global.styling.borders.bottom',
				rounded: false
			}
		},
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Placeholder Paragraph',
			$loremcount_type: 'slider',
			loremcount: 100
		},
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Placeholder Paragraph',
			$loremcount_type: 'slider',
			loremcount: 100
		},
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Image',
			$graphic_noframe: true,
			$graphic_size: 4,
			graphic: {
				$image_type: 'image',
				image: '/remote/direct_uploads/1513978725_1920x1200.2.jpg'
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
		},
		{
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Image Color',
			$graphic_noframe: true,
			$graphic_size: 4,
			graphic: {
				$image_color_type: 'image',
				image_color: '/remote/direct_uploads/1514150005_aurora_by_nmsmith-d7i1w5y.jpg',
				$abstracted_content_hidden: true,
				abstracted_content: {
					colors: {}
				}
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
				border: '@@global.styling.borders.none',
				border_color: '@@global.styling.colors.default',
				rounded: false
			}
		}
	]
}