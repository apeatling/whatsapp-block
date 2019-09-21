/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */

import { WhatsAppIcon } from './icon.js';

registerBlockType( 'apeatling/whatsapp-block', {
	title: 'WhatsApp',
	icon: WhatsAppIcon,
	category: 'widgets',

	attributes: {},

	edit: ( props ) => {
		return (
			<p>placeholder</p>
		);
	},

	save: ( props ) => {
		return (
			<p>placeholder</p>
		);
	},

} );