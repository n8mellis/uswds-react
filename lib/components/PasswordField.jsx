import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
/**
 * Class representing a password input field
 *
 * This component extends Text Input 
 *
 * Required props:
 * - label: string. Sets the text for the input's label
 * - type: string. Sets the input field type
 *
 * Optional props:
 * - id: string. Sets the input fields's id attribute and the label's for attribute
 * - required: bool. Adds required label, required attribute and aria-required='true'
 */
export default class PasswordField extends Component { 
  render() {
    return (
        <TextInput
          label="Password"
          id="password"
          type="password"
          required
        />
    )
  }
}