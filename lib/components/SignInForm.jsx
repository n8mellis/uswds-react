import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import PasswordField from "./PasswordField";

/**
 * Class representing a generic Address Form
 *
 * This component returns a <form> with legend and some default Address fields: street address (1 & 2), city, state, zip
 *
 * Required props:
 * - input: node. Series of field control types
 *
 * Optional props:
 * - legend: string. sets the form legend
 * - id: string. Sets the form's id attribute
 * - inputClass: string. Adds any custom classes to TextInput fields
 */
export default function SignInForm ({legend, input}) {
  return (
    <Form>
      <fieldset className="usa-fieldset-inputs usa-sans">
        <legend className="usa-drop_text">{legend}</legend>
        <span>or <a href="javascript:void(0);">create an account</a></span>
        <TextInput
        label="Username or email address"
        id="username"
        required />
        <PasswordField />
      </fieldset>
    </Form>
  )
}

SignInForm.PropTypes = {
  legend: PropTypes.string
}