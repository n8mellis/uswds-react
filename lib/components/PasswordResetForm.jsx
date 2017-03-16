import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Alert from './Alert';
import PrimaryButton from './PrimaryButton';
import PasswordField from './PasswordField';

/**
 * Class representing a generic Password Reset Form
 *
 * This component returns a <form> with legend and some default Password Reset fields: new password, confirm new password, and an alert w/ instructions
 *
 * Required props:
 * - input: node. Series of field control types
 * - primaryButtonText: string. Sets the button text
 *
 * Optional props:
 * - legend: string. sets the form legend
 * - id: string. Sets the form's id attribute
 * - message: string. Adds any custom message to apply to Alert text
 */
export default class PasswordResetForm extends React.Component { 
  /*   
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }

  render() {
    let legend,
        primaryButtonText,
        message;

    if (this.props.formTitle){
      legend = (<legend className="usa-drop_text">{this.props.formTitle}</legend>)
    }
    if (this.props.primaryButtonText) {
      primaryButtonText = this.props.primaryButtonText;
    }
    message = (<p>Be at least 8 characters <br /> Have at least 1 uppercase character <br /> Have at least 1 numerical character <br />  Another requirement</p>);

    return (
      <Form className="usa-form">
        <fieldset className="usa-fieldset-inputs">
          {legend}
          {this.props.summary} 
          <Alert
            type="info"
            title="Passwords must:"
            body={message}/>  
            <PasswordField hasToggle />
            <PasswordField label="Confirm password" hasToggle />     
          <PrimaryButton
          text={primaryButtonText}
           />   
        </fieldset>
      </Form>
      ) 
  }
}

PasswordResetForm.PropTypes = {
  summary: PropTypes.string,
  formTitle: PropTypes.string,
  primaryButtonText: PropTypes.string
}

PasswordResetForm.defaultProps = {
  formTitle: 'Reset password',
  summary: 'Please enter your new password',
  primaryButtonText: "Reset password"
}