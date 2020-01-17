<?php

/**
 * Plugin Name: Send a Message
 * Description: Add a WhatsApp message button to your website and allow your visitors to send you a message with the tap of a button.
 * Version: 1.0.3
 * Author: Andy Peatling
 * Author URI: https://apeatling.com
 * Requires at least: 5.0
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: send-a-message
 */

add_action( 'init', function() {
	$dependencies_file_path = plugin_dir_path( __FILE__ ) . 'build/index.deps.json';
	$dependencies = file_exists( $dependencies_file_path )
		? json_decode( file_get_contents( $dependencies_file_path ) )
		: array();

	wp_register_script(
		'send-a-message-blocks-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$dependencies,
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		true
	);

	wp_register_style(
		'send-a-message-blocks-style',
		plugins_url( 'build/style.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);

	wp_register_style(
		'send-a-message-blocks-editor-style',
		plugins_url( 'build/editor.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
	);

	wp_set_script_translations( 'send-a-message-blocks-script', 'send-a-message' );

	// WhatsApp
	register_block_type( 'apeatling/whatsapp-block', [
		'editor_script' => 'send-a-message-blocks-script',
		'style' => 'send-a-message-blocks-style',
		'editor_style' => 'send-a-message-blocks-editor-style',
	] );
} );