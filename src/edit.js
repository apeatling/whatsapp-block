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

		this.state = {
			editing: ! ( this.props.attributes.phoneNumber && this.props.attributes.countryCode ),
		};

		this.onSubmitURL = this.onSubmitURL.bind( this );
	}

	onSubmitURL( e ) {
		e.preventDefault();

		const { countryCode, phoneNumber } = this.props.attributes;

		if ( countryCode && phoneNumber ) {
			this.setState( { editing: false } );
		}
	}

	render() {
		const {
			countryCode,
			phoneNumber,
			buttonText,
		} = this.props.attributes;

		const { setAttributes, className } = this.props;

		if ( this.state.editing ) {
			return (
				<Placeholder
					icon={ WhatsAppIcon }
					label="WhatsApp"
					instructions="Enter the phone number for your WhatsApp account."
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
							value={ phoneNumber }
						/>
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
				title: __( 'Edit RSS URL' ),
				onClick: () => this.setState( { editing: true } ),
			},
		];

		return (
			<div className={ className }>
				<BlockControls>
					<Toolbar controls={ toolbarControls } />
				</BlockControls>

				<RichText
					placeholder={ __( 'Get in touch with WhatsApp' ) }
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
