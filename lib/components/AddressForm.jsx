import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import { ZipCodeValidator } from '../../lib/utils/validators';

/**
 * Class representing a generic Address Form
 *
 * This component returns a <form> with legend and some default Address fields: street address (1 & 2), city, state, zip
 *
 * Required props:
 * - legend: string. sets the form legend
 * - input: node. Series of field control types
 *
 * Optional props:
 * - id: string. Sets the form's id attribute
 * - inputClass: string. Adds any custom classes to TextInput fields
 */
export default function AddressForm ({legend, input}) {
    let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  return (
    <Form
    legend="Mailing address"
    >
      <TextInput
      label="Street address 1"
      id="streetAddress"
       />

      <TextInput
      label="Street address 2 (Optional)"
      id="streetAddress2"
       />
      <div>
        <div className="usa-input-grid usa-input-grid-medium">
          <TextInput
          label="City"
          id="cityAddress"
           />
         </div>
        <div className="usa-input-grid usa-input-grid-small">
          <Dropdown label="State" id="stateAddress" options={states} />
        </div> 
      </div>    

      <TextInput
      className="usa-input-medium"
      label="Zip"
      id="zipAddress"
       />
    </Form>
  );
}