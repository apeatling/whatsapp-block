/**
 * External dependencies
 */

import classnames from 'classnames';
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
	title: constants.blockTitle,
	description: __( 'Allow your visitors to send you a message on WhatsApp with the tap of a button.', 'send-a-message' ),
	icon: WhatsAppIcon,
	category: 'widgets',
	keywords: [
		_x( 'whatsapp', 'keyword', 'send-a-message' ),
		_x( 'messenger', 'keyword', 'send-a-message' ),
		_x( 'contact', 'keyword', 'send-a-message' ),
		_x( 'support', 'keyword', 'send-a-message' ),
		_x( 'message', 'keyword', 'send-a-message' ),
		_x( 'send', 'keyword', 'send-a-message' ),
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
			<div className={ classnames( props.className, `is-color-${ colorClass }` ) }>
				<a className="whatsapp-block__button" href={ getWhatsAppUrl() } style={ { backgroundColor: backgroundColor } }>
					{ getButtonText() }
				</a>
			</div>
		);
	},
} );
