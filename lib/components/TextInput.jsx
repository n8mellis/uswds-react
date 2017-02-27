import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - label: Sets the text for the input's label
 * - id: sets the id attribute for the input and the <label for... attribute
 *
 * Optional props:
 * - type: string, defaults to 'text'. Sets the input type
 * - value: string. If present pre-populates the input with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - validators: array of Validator objects. If present, field get error state onBlur if the value does not match the given test
 * - spellCheck: true or false, defaults to false. If true, enables browser autocorrection while typing
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - isValid: bool. If true, sets isValid state - i.e. green border
 * - allowedChars: Validator object. If present, user can only type characters that match the given test
 */
export default class TextInput extends Component {
  /**
   * constructor 
   * @param {object} props The props that will be applied to this component.
   * Set initial state
   * Value: value of the input. 
   * isPristine: tracks if user has typed in the input
   * isValid: tracks if the field is valid based on passed validators
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isPristine: true,
      isValid: false,
      hasError: false,
      errorMessage : null
    };
  }

  /**
   * If a value or errorMessage is passed as props, adjust the state accordingly
   */
  componentWillMount() {
    if (this.props.errorMessage) {
      this.setState({
        isValid: false,
        hasError: true,
        errorMessage: this.props.errorMessage
      });
    }
    if (this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
    if (this.props.isValid) {
      this.setState({
        isPristine: false,
        isValid: true,
        hasError: false,
        errorMessage : null
      });
    }
  }

  /**
   * @returns {node} (div) that includes a label, errorMessage, input 
   */
  render() {
    let error = null;
    if (this.state.hasError) {
      error = (
        <span className="usa-input-error-message" role="alert">
          {this.state.errorMessage}
        </span>
      );
    }

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <InputLabel htmlFor={this.props.id} required={this.props.required} label={this.props.label} />

        {error}

        <input
          id={this.props.id}
          name={this.props.id}
          type={this.props.type}
          value={this.state.value}
          className={this.state.isValid ? 'usa-input-success' : null}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          spellCheck={this.props.spellCheck ? true : false}
        />
      </div>
    );
  }

  /**
   * Checks input value against required status and passed validators
   */
  _validate() {
    let validators = this.props.validators;
    // Check if field empty
    if (!this.state.value) {
      // If it's required, say so
      if (this.props.required) {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: 'This field is required'
        });
      } else {
        // is empty so reset isValid and hasError
        this.setState({
          isValid: false,
          hasError: false,
          errorMessage: null
        });
      }
    }
    // If validator(s) were sent as a prop, test them next
    else if (validators) {
      for (let validator of validators) {
        // check is validator is forced 'no validation'
        if (!validator.test) {
          break;
        }
        // if validator doesn't pass it own test, set error and abort loop
        if (!validator.isValid(this.state.value)) {
          this.setState({
            hasError: true,
            isValid: false,
            errorMessage: validator.errorMessage
          });
          break;
        // else assume it's valid
        } else {
          this.setState({
            hasError: false,
            isValid: true
          });
        }
      }
    }
    // must be required field with a value, so no error
    else {
      this.setState({
        hasError: false,
        errorMessage: null
      });
    }
  }

  /**
   * onBlur event on input
   */
  _handleBlur() {
    if ((this.props.required || this.props.validators) && !this.state.isPristine) {
      this._validate();
    }
  }

  /**
   * change event on input
   * @param {event} event The event
   */
  _handleChange(event) {
    if (this.props.allowedChars) {
      let input = event.target.value.slice(-1);
      if (!this.props.allowedChars.isValid(input)) {
        return;
      }
    }
    this.setState({value: event.target.value}, () => {
      if (this.state.value) {
        this.setState({isPristine: false});
      }
      if (this.state.hasError || this.state.isValid) {
        this._validate();
      }
    });
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'search',
    'url',
    'date',
    'month',
    'tel',
    'week',
    'number'
  ]),
  required: PropTypes.bool,
  spellCheck: PropTypes.bool,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
  value: PropTypes.string,
  validators: PropTypes.array,
  allowedChars: PropTypes.object
};

TextInput.defaultProps = {
  type: 'text',
  spellCheck: false,
  required: false
};
