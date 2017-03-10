import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import PasswordField from "./PasswordField";
import PrimaryButton from "./PrimaryButton";
import Validator from "../utils/validators";

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
 * - primaryButtonText: string. Sets the form's button text
 */
export default class SignInForm extends React.Component {  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }

  render() {

    let legend,
        primaryButtonText;

    if (this.props.formTitle){
      legend = (<legend className="usa-drop_text">{this.props.formTitle}</legend>)
    }

    if (this.props.primaryButtonText) {
      primaryButtonText = this.props.primaryButtonText;
    }

    return (
      <Form>
        <fieldset className="usa-fieldset-inputs">
          {legend}
          <span> or <a href="javascript:void(0);">create an account</a></span>
          <TextInput
          label="Username or email address"
          id="username"
          required />
          <PasswordField />
          <p className="usa-form-note">
          <a title="Show password" href="javascript:void(0);"
              className="usa-show_password"
              aria-controls="password">
            Show password</a>
          </p>        
          <PrimaryButton
          text={primaryButtonText}
           />
           <p><a href="javascript:void(0);" title="Forgot username">
          Forgot username?</a></p>
          <p><a href="javascript:void(0);" title="Forgot password">
            Forgot password?</a></p>
        </fieldset>
      </Form>
    )

  }
}

SignInForm.PropTypes = {
  formTitle: PropTypes.string
};

SignInForm.defaultProps = {
  formTitle: "Sign in",
  primaryButtonText: "Sign in"
};
