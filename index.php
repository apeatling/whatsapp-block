<?php

/**
 * Plugin Name: WhatsApp Block
 * Description: Allow your visitors to send you a message on WhatsApp with the tap of a button.
 * Version: 1.0.0
 * Author: Andy Peatling
 * Text Domain: whatsapp-block
 */

add_action( 'init', function() {
	$dependencies_file_path = plugin_dir_path( __FILE__ ) . 'build/index.deps.json';
	$dependencies = file_exists( $dependencies_file_path )
		? json_decode( file_get_contents( $dependencies_file_path ) )
		: array();

	// Block JS
	wp_register_script(
		'whatsapp-block-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$dependencies,
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		true
	);

	// Block front end style
	wp_register_style(
		'whatsapp-block-style',
		plugins_url( 'build/style.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);

	// Block editor style
	wp_register_style(
		'whatsapp-block-editor-style',
		plugins_url( 'build/editor.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
	);

	// i18n
	wp_set_script_translations( 'whatsapp-block-script', 'whatsapp-block' );

	register_block_type( 'apeatling/whatsapp-block', [
		'editor_script' => 'whatsapp-block-script',
		'style' => 'whatsapp-block-style',
		'editor_style' => 'whatsapp-block-editor-style',
	] );
} );