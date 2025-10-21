<?php
/**
 * Plugin Name:       Kanopi Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kanopi-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_kanopi_blocks_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}


}
add_action( 'init', 'create_block_kanopi_blocks_block_init' );



function my_blocks_plugin_actually_enqueue_aos() {

	 if ( is_admin() ) {
        return; // do not run in editor
    }

    global $post;
    if ( ! isset( $post ) ) {
        return;
    }

	 if ( has_block( 'kanopi/hero-block', $post ) || has_block( 'kanopi/testimonials-block', $post ) ) {

     // AOS CSS
    wp_enqueue_style(
        'aos-css',
        plugin_dir_url(__FILE__) . 'node_modules/aos/dist/aos.css',
        [],
        '3.0.0'
    );

    // AOS JS
    wp_enqueue_script(
        'aos-js',
        plugin_dir_url(__FILE__) . 'node_modules/aos/dist/aos.js',
        [],
        '3.0.0',
        true
    );
	 // Initialize AOS on frontend
    wp_add_inline_script('aos-js', 'AOS.init();');
	}
   
}
add_action( 'wp_enqueue_scripts', 'my_blocks_plugin_actually_enqueue_aos' );