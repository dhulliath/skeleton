{
	article_item_types: {
		image2: {
			$item_type_type: 'title',
			$item_type_hidden: true,
			item_type: 'Image Color',
			$graphic_noframe: true,
			$graphic_size: 4,
			graphic: {
				$image_color_type: 'image',
				image_color: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					colors: {}
				}
			},
			$styling_noframe: true,
			$styling_size: 4,
			styling: {
				size: '@@global.styling.sizing_extended.medium',
				floating: '@@global.styling.float.none'
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