/**
 * External dependencies
 */

import { Component } from '@wordpress/element';
import {
	__,
	_x,
} from '@wordpress/i18n';
import {
	Button,
	Placeholder,
	TextControl,
	TextareaControl,
	SelectControl,
	Toolbar,
	Popover,
	Icon,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import {
	BlockControls,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import { countryCodes } from './countrycodes.js';
import { WhatsAppIcon } from './icon.js';
import { constants } from './constants.js';

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
			firstMessage,
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
							placeholder={ __( 'Your phone number…', 'whatsapp-block' ) }
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
								{ __( 'Please enter a valid phone number', 'whatsapp-block' ) }
							</Popover>

						) }
						<Button isLarge type="submit">
							{ _x( 'Insert', 'block insert button', 'whatsapp-block' ) }
						</Button>
					</form>
				</Placeholder>
			);
		}

		const toolbarControls = [
			{
				icon: 'edit',
				title: __( 'Edit WhatsApp phone number', 'whatsapp-block' ),
				onClick: () => this.setState( { editing: true } ),
			},
		];

		const getFirstMessage = () => {
			if ( undefined === firstMessage ) {
				return constants.defaultFirstMessage;
			}

			return firstMessage;
		};

		return (
			<div className={ className }>
				<BlockControls>
					<Toolbar controls={ toolbarControls } />
				</BlockControls>

				<InspectorControls>
					<PanelBody
						title="Message Settings"
						initialOpen={ true }
					>
						<PanelRow>
							<TextareaControl
								label={ __( 'Default First Message', 'whatsapp-block' ) }
								help={ __( 'The default first message that will be sent by visitors when using this button.', 'whatsapp-block' ) }
								value={ getFirstMessage() }
								onChange={ ( text ) => setAttributes( { firstMessage: text } ) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<RichText
					placeholder={ constants.defaultButtonText }
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
