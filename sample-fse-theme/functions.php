<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package sample-fse-theme
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function sample_fse_theme_styles() {
	wp_enqueue_style(
		'sample-fse-theme-style',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get( 'Version' )
	);

	wp_enqueue_style( 'theme-style', get_theme_file_uri('/assets/css/main.css'), [], filemtime( get_theme_file_path('/assets/css/main.css') ) );
    
     if (!is_admin()) {
        wp_enqueue_style('dashicons');
    }
}
add_action( 'wp_enqueue_scripts', 'sample_fse_theme_styles' );



add_action('init', function () {
    register_block_type(
        get_template_directory() . '/blocks/current-date'
    );
});




/*------------------------------------------
1. Minor security/optimization tweaks
------------------------------------------*/
remove_action( 'wp_head', 'wp_generator' );  
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );




/*------------------------------------------
2. Set Except content length
------------------------------------------*/
function sample_fse_theme_custom_excerpt_length( $length ) {
   
    return 30; 
}
add_filter( 'excerpt_length', 'sample_fse_theme_custom_excerpt_length', 999 );


/*------------------------------------------
3. Change Except read more text
------------------------------------------*/

function sample_fse_theme_custom_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'sample_fse_theme_custom_excerpt_more' );



/*------------------------------------------
4. Set default image for the post loop
------------------------------------------*/
function kanopi_set_default_thumbnail( $html, $post_id, $post_thumbnail_id, $size, $attr ) {

    // If no featured image exists for this post
    if ( empty( $html ) ) {
        // Path to your default image stored in your theme's folder
        $default_image_url = get_stylesheet_directory_uri() . '/assets/images/default-img.jpg';

        // Build the default image HTML
        $html = '<img src="' . esc_url( $default_image_url ) . '" alt="' . esc_attr( get_the_title( $post_id ) ) . '" />';
    }

    return $html;
}
add_filter( 'post_thumbnail_html', 'kanopi_set_default_thumbnail', 10, 5 );




/*--------------------------------------------------------
5. Add animtion aatributes to the Query loop Post template
-------------------------------------------------------*/

add_filter( 'render_block', function( $block_content, $block ) {
   

    if ( $block['blockName'] === 'core/post-template' && ! empty( $block_content ) ) {
      

        $block_content = preg_replace(
    '/<ul([^>]*)class="([^"]*)"/',
    '<ul$1class="$2 kanopi-post-grid" data-aos="fade-up" data-aos-duration="800"',
    $block_content,
    1
	);
    }
    return $block_content;
}, 10, 2 );



/*--------------------------------------------------------
6. Add animtion attributes to the heading block
-------------------------------------------------------*/

add_filter( 'render_block_core/heading', function( $block_content, $block ) {
    // Only apply if content exists and it's frontend
    if ( ! is_admin() && ! empty( $block_content ) ) {
        // Add AOS attributes to the heading tag
        $block_content = preg_replace(
            '/<(h[1-6])(.*?)>/',
            '<$1$2 data-aos="fade-up" data-aos-duration="800">',
            $block_content,
            1
        );
    }
    return $block_content;
}, 10, 2 );