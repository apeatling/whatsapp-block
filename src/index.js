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
		backgroundColor: {
			type: 'string',
		},
		colorClass: {
			type: 'string',
		},
	},

	edit: WhatsAppBlockEdit,

	save: ( props ) => {
		const {
			countryCode,
			phoneNumber,
			firstMessage,
			buttonText,
			backgroundColor,
			colorClass,
		} = props.attributes;
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
				url += '&text=' + encodeURIComponent( getFirstMessage() );
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
			<div className={ props.className + ' is-color-' + colorClass }>
				<a className="whatsapp-block__button" href={ getWhatsAppUrl() } style={ { backgroundColor: backgroundColor } }>
					{ getButtonText() }
				</a>
			</div>
		);
	},
} );
