import React, { Component, PropTypes } from 'react';
import Link from "./Link";
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
export default class PasswordField extends Component { /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      type: 'password'
    }
  }
  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  _handleClick() {
    if (this.state.type === 'password') {
      this.setState({
        type: 'text'
      });
    } else {
      this.setState({
        type: 'password'
      });
    }    
  }

  render() {
  const {label, hasToggle, id = this.id} = this.props;
  let toggleText = (<p className="usa-form-note"><a title="Show password" className="usa-show_password" onClick={this._handleClick.bind(this)}>Show password</a></p>);

    return (
        <div><TextInput
          label={label}
          id={id}
          type={this.state.type}
          hasToggle={hasToggle}
          required
        />
        {hasToggle ? toggleText : null}
        </div>   
    )
  }
}

PasswordField.PropTypes = {
  label: PropTypes.string,
  hasToggle: PropTypes.bool
}
PasswordField.defaultProps = {
  label: 'Password',
  hasToggle: false
}
