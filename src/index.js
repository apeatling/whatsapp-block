/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	Button,
	Placeholder,
	TextControl,
	SelectControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */

import { WhatsAppIcon } from './icon.js';
import { countryCodes } from './countrycodes.js';

registerBlockType( 'apeatling/whatsapp-block', {
	title: 'WhatsApp',
	icon: WhatsAppIcon,
	category: 'widgets',

	supports: {
		align: [ 'left', 'center', 'right' ],
	},

	styles: [
		{ name: 'default', label: __( 'Default' ), isDefault: true },
		{ name: 'light', label: __( 'Light' ) },
	],

	attributes: {
		countryCode: 'string',
		phoneNumber: 'string',
	},

	edit: ( props ) => {
		const { attributes: { countryCode, phoneNumber }, setAttributes } = props;

		return (
			<Placeholder
				icon={ WhatsAppIcon }
				label="WhatsApp"
				instructions="Enter the phone number for your WhatsApp account."
			>
				<form>
					<SelectControl
						value={ countryCode }
						onChange={ ( value ) => setAttributes( { countryCode: value } ) }
						options={ countryCodes }
					/>
					<TextControl
						placeholder={ __( 'Your phone number…' ) }
						onChange={ ( value ) => setAttributes( { phoneNumber: value } ) }
						value={ phoneNumber }
						className={ 'components-placeholder__input' }
					/>
					<Button isLarge type="submit">
						{ __( 'Insert' ) }
					</Button>
				</form>
			</Placeholder>
		);
	},

	save: () => {
		return (
			<p>placeholder</p>
		);
	},

} );
