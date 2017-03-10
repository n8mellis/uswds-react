import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import Utilities from '../helpers/utilities';
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
 * - type: string. Sets the input field's type attribute, will need to be manipulated to show/hide password
 * - required: bool. Adds required label, required attribute and aria-required='true'
 */
export default class PasswordField extends Component { 
  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  render() {
  const {label, id, type = this.id} = this.props;
    return (
        <TextInput
          label={label}
          id={id}
          type={type}
          required
        />
    )
  }
}

PasswordField.PropTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}
PasswordField.defaultProps = {
  label: 'Password',
  type: 'password'
}
