/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	RichText,
} from '@wordpress/block-editor';

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
			type: 'array',
			source: 'children',
			selector: 'div.whatsapp-button',
		},
	},

	edit: WhatsAppBlockEdit,

	save: ( props ) => {
		// whatsapp://send?phone=&text=&source=&data=
		return (
			<div className={ props.className }>
				<div className="whatsapp-button">
					<RichText.Content value={ props.attributes.buttonText } />
				</div>
			</div>
		);
	},
} );
