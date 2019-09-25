/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

import { WhatsAppBlockEdit } from './edit.js';
import { WhatsAppIcon } from './icon.js';

registerBlockType( 'apeatling/whatsapp-block', {
	title: 'WhatsApp',
	description: 'Allow your visitors to send you a message on WhatsApp with the tap of a button.',
	icon: WhatsAppIcon,
	category: 'widgets',
	keywords: [ __( 'whatsapp' ), __( 'messenger' ), __( 'contact' ), __( 'support' ) ],

	supports: {
		align: [ 'left', 'center', 'right' ],
		html: false,
	},

	styles: [
		{ name: 'default', label: __( 'Default' ), isDefault: true },
		{ name: 'light', label: __( 'Light' ) },
	],

	attributes: {
		countryCode: {
			type: 'string',
		},
		phoneNumber: {
			type: 'string',
		},
		buttonText: {
			type: 'string', // TODO: switch to selector
		},
	},

	edit: WhatsAppBlockEdit,

	save: () => {
		return (
			<p>placeholder</p>
		);
	},

} );
