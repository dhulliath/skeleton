{
    article_item_types: {
        image: {
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Image',
			$graphic_noframe: true,
			$graphic_size: 4,
			graphic: {
				$image_type: 'image',
				image: '',
			},
			$styling_noframe: true,
			$styling_size: 4,
			styling: {
				size: '@@global.styling.sizing_extended.medium',
				floating: '@@global.styling.float.none',
			},
			$bordering_noframe: true,
			$bordering_size: 4,
			bordering: {
				border: '@@global.styling.borders.none',
				border_color: '@@global.styling.colors.default',
				rounded: false
			}
		}
	}
}