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

		const isValidPhoneNumber = this.isValidPhoneNumber();
		this.state = {
			editing: ! isValidPhoneNumber,
			isValidPhoneNumber: isValidPhoneNumber,
		};

		this.onSubmitURL = this.onSubmitURL.bind( this );
	}

	async setDefaultCountryCode() {
		const { countryCode } = this.props.attributes;
		const { setAttributes } = this.props;

		if ( undefined === countryCode ) {
			setAttributes( { countryCode: '1' } );

			const geoFetch = await fetch( 'http://ip-api.com/json/?fields=countryCode' )
				.then( response => {
					if ( ! response.ok ) {
						return false;
					}

					return response;
				} )
				.catch( () => {
					return false;
				} );

			if ( geoFetch ) {
				const geo = await geoFetch.json();

				countryCodes.forEach( ( item ) => {
					if ( item.code === geo.countryCode ) {
						setAttributes( { countryCode: item.value } );
					}
				} );
			}
		}
	}

	onSubmitURL( e ) {
		e.preventDefault();

		if ( this.isValidPhoneNumber() ) {
			this.setState( {
				editing: false,
				isValidPhoneNumber: true,
			} );
		} else {
			this.setState( {
				isValidPhoneNumber: false,
			} );
		}
	}

	isValidPhoneNumber() {
		const { countryCode, phoneNumber } = this.props.attributes;
		const phoneNumberRegEx = RegExp( /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'g' );

		if ( undefined === phoneNumber || phoneNumber.length < 1 ) {
			return false;
		}

		return phoneNumberRegEx.test( countryCode.replace( /\D/g, '' ) + phoneNumber );
	}

	render() {
		const {
			countryCode,
			phoneNumber,
			buttonText,
		} = this.props.attributes;

		const { setAttributes, className } = this.props;

		const onFocusPhoneNumber = () => {
			this.setState( { isValidPhoneNumber: true } );
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
						{ ! this.state.isValidPhoneNumber && (
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
					className="whatsapp-block__button"
					tagName="a"
				/>
			</div>
		);
	}
}
