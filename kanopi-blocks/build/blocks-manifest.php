<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kanopi/hero-block',
		'version' => '0.1.0',
		'title' => 'Hero Block',
		'category' => 'widgets',
		'icon' => 'align-wide',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true
		),
		'textdomain' => 'hero-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h2',
				'default' => 'Welcome to Our Awesome Site!'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => 'Discover amazing things and explore our features.'
			),
			'imageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block__image img',
				'attribute' => 'src',
				'default' => ''
			),
			'buttonText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-block__btn-primary:first-of-type',
				'default' => 'Learn More'
			),
			'buttonLink' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block__buttons .wp-block-button:nth-child(1) .hero-block__btn-primary.wp-block-button__link',
				'attribute' => 'href',
				'default' => '#'
			),
			'buttonText2' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-block__buttons .wp-block-button:nth-child(2) .hero-block__btn-primary.wp-block-button__link',
				'default' => 'Contact Us'
			),
			'buttonLink2' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block__buttons .wp-block-button:nth-child(2) .hero-block__btn-primary.wp-block-button__link',
				'attribute' => 'href',
				'default' => '#'
			)
		),
		'viewScript' => 'file:./view.js'
	),
	'testimonials-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kanopi/testimonials-block',
		'version' => '0.1.0',
		'title' => 'Testimonials Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'text' => true,
				'background' => true,
				'link' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Testimonials'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,
non nisl tincidunt ut elementum turpis.'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'icon' => 'format-quote',
						'itemTitle' => 'Title',
						'itemDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl tincidunt ut elementum turpis.'
					),
					array(
						'icon' => 'format-quote',
						'itemTitle' => 'Title',
						'itemDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl tincidunt ut elementum turpis.'
					),
					array(
						'icon' => 'format-quote',
						'itemTitle' => 'Title',
						'itemDescription' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl tincidunt ut elementum turpis.'
					)
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'icon' => array(
							'type' => 'string'
						),
						'itemTitle' => array(
							'type' => 'string'
						),
						'itemDescription' => array(
							'type' => 'string'
						)
					)
				)
			)
		),
		'textdomain' => 'testimonials-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
