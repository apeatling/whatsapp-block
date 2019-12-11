/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import {
	__,
	_x,
} from '@wordpress/i18n';
import {
	RichText,
} from '@wordpress/block-editor';
/**
 * Internal dependencies
 */

import { WhatsAppBlockEdit } from './edit.js';
import { WhatsAppIcon } from './icon.js';
import { constants } from './constants.js';

registerBlockType( 'apeatling/whatsapp-block', {
	title: _x( 'WhatsApp', 'block title', 'whatsapp-block' ),
	description: __( 'Allow your visitors to send you a message on WhatsApp with the tap of a button.', 'whatsapp-block' ),
	icon: WhatsAppIcon,
	category: 'widgets',
	keywords: [
		_x( 'whatsapp', 'keyword', 'whatsapp-block' ),
		_x( 'messenger', 'keyword', 'whatsapp-block' ),
		_x( 'contact', 'keyword', 'whatsapp-block' ),
		_x( 'support', 'keyword', 'whatsapp-block' ),
	],

	supports: {
		align: [ 'left', 'center', 'right' ],
		html: false,
	},

	styles: [
		{ name: 'green', label: _x( 'Default', 'block style', 'whatsapp-block' ), isDefault: true },
		{ name: 'dark', label: _x( 'Dark', 'block style', 'whatsapp-block' ) },
		{ name: 'light', label: _x( 'Light', 'block style', 'whatsapp-block' ) },
	],

	attributes: {
		countryCode: {
			type: 'string',
		},
		phoneNumber: {
			type: 'string',
		},
		firstMessage: {
			type: 'string',
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: 'a.whatsapp-block__button',
		},
	},

	edit: WhatsAppBlockEdit,

	save: ( props ) => {
		const { countryCode, phoneNumber, firstMessage, buttonText } = props.attributes;
		const fullPhoneNumber = countryCode.replace( /\D+/g, '' ) + phoneNumber.replace( /\D+/g, '' );

		const getFirstMessage = () => {
			if ( undefined === firstMessage ) {
				return constants.defaultFirstMessage;
			}

			return firstMessage;
		};

		const getWhatsAppUrl = () => {
			let url = constants.whatsAppURL + fullPhoneNumber;

			if ( '' !== firstMessage ) {
				url += '/?text=' + encodeURIComponent( getFirstMessage() );
			}

			return url;
		};

		const getButtonText = () => {
			if ( ! buttonText.length ) {
				return constants.defaultButtonText;
			}

			return <RichText.Content value={ buttonText } />;
		};

		return (
			<div className={ props.className }>
				<a className="whatsapp-block__button" href={ getWhatsAppUrl() }>
					{ getButtonText() }
				</a>
			</div>
		);
	},
} );
