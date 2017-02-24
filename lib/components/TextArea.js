import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';

/**
 * Class representing a label and a textarea element
 *
 * Required props:
 * - label: Sets the text for the input's label
 * - id: sets the id attribute for the input and the <label for... attribute
 *
 * Optional props:
 * - value: string. If present pre-populates the input with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 */
export default class TextArea extends Component {
  /**
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
      errorMessageBody : null
    };
  }

  /**
   * If a value or errorMessage is passed as props, adjust the state accordingly
   */
  componentWillMount() {
    if (this.props.errorMessage) {
      this.setState({
        isPristine: true,
        isValid: false,
        hasError: true,
        errorMessageBody: this.props.errorMessage
      });
    }
    if (this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  /**
   * @returns {node} (div) that includes a label, errorMessage, textarea 
   */
  render() {
    let errorMessage = null;
    if (this.state.hasError) {
      errorMessage = (
        <span className="usa-input-error-message" role="alert">
          {this.state.errorMessageBody}
        </span>
      );
    }

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <InputLabel htmlFor={this.props.id} required={this.props.required} label={this.props.label} />

        {errorMessage}

        <textarea
          id={this.props.id}
          name={this.props.id}
          value={this.state.value}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          ref={(input) => this._input = input}
        ></textarea>
      </div>
    );
  }

  /**
   * Checks textarea value against required status 
   */
  _validate() {
    // Check if field is required and empty
    if (this.props.required && !this._input.value) {
      this.setState({
        hasError: true,
        isValid: false,
        errorMessageBody: 'This field is required'
      });
    }
    // Field must not have an error
    else {
      this.setState({
        hasError: false,
        errorMessageBody: null
      });
    }
  }

  _handleBlur() {
    if (this.props.required && !this.state.isPristine) {
      this._validate();
    }
  }

  _handleChange(event) {
    this.setState({value: event.target.value}, () => {
      if (this.state.value) {
        this.setState({isPristine: false});
      }
      if (this.state.hasError) {
        this._validate();
      }
    });
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string
};
