/**
 * External dependencies
 */

import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	Button,
	Placeholder,
	TextControl,
	SelectControl,
	Toolbar,
	Popover,
	Icon,
} from '@wordpress/components';
import {
	BlockControls,
	RichText,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import { countryCodes } from './countrycodes.js';
import { WhatsAppIcon } from './icon.js';

export class WhatsAppBlockEdit extends Component {
	constructor() {
		super( ...arguments );

		this.setDefaultCountryCode();

		this.state = {
			editing: ! ( this.props.attributes.phoneNumber && this.props.attributes.countryCode ),
			invalidPhoneNumber: false,
		};

		this.onSubmitURL = this.onSubmitURL.bind( this );
	}

	setDefaultCountryCode() {
		const { countryCode } = this.props.attributes;
		const { setAttributes } = this.props;

		if ( undefined === countryCode ) {
			setAttributes( { countryCode: '1' } );
		}
	}

	onSubmitURL( e ) {
		e.preventDefault();

		if ( this.isValidPhoneNumber() ) {
			this.setState( {
				editing: false,
				invalidPhoneNumber: false,
			} );
		} else {
			this.setState( {
				invalidPhoneNumber: true,
			} );
		}
	}

	isValidPhoneNumber() {
		const { countryCode, phoneNumber } = this.props.attributes;
		const phoneNumberRegEx = RegExp( /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'g' );

		if ( phoneNumber.length < 1 ) {
			return false;
		}

		return phoneNumberRegEx.test( countryCode + phoneNumber );
	}

	render() {
		const {
			countryCode,
			phoneNumber,
			buttonText,
		} = this.props.attributes;

		const { setAttributes, className } = this.props;

		const onFocusPhoneNumber = () => {
			this.setState( { invalidPhoneNumber: false } );
		};

		if ( this.state.editing ) {
			return (
				<Placeholder
					icon={ WhatsAppIcon }
					label="WhatsApp"
					instructions="Enter the phone number for your WhatsApp account:"
					className={ className }
				>
					<form onSubmit={ this.onSubmitURL }>
						<SelectControl
							value={ countryCode }
							onChange={ ( value ) => setAttributes( { countryCode: value } ) }
							options={ countryCodes }
						/>
						<TextControl
							placeholder={ __( 'Your phone number…' ) }
							onChange={ ( value ) => setAttributes( { phoneNumber: value } ) }
							onFocus={ onFocusPhoneNumber }
							value={ phoneNumber }
						/>
						{ this.state.invalidPhoneNumber && (
							<Popover
								position="top center"
								className="whatsapp-phonenumber-invalid"
							>
								<Icon icon="info" />
								{ __( 'Please enter a valid phone number' ) }
							</Popover>

						) }
						<Button isLarge type="submit">
							{ __( 'Insert' ) }
						</Button>
					</form>
				</Placeholder>
			);
		}

		const toolbarControls = [
			{
				icon: 'edit',
				title: __( 'Edit WhatsApp phone number' ),
				onClick: () => this.setState( { editing: true } ),
			},
		];

		return (
			<div className={ className }>
				<BlockControls>
					<Toolbar controls={ toolbarControls } />
				</BlockControls>

				<RichText
					placeholder={ __( 'Chat on WhatsApp' ) }
					keepPlaceholderOnFocus={ true }
					value={ buttonText }
					onChange={ ( value ) => setAttributes( { buttonText: value } ) }
					withoutInteractiveFormatting
					allowedFormats={ [] }
					className="whatsapp-button"
				/>
			</div>
		);
	}
}
