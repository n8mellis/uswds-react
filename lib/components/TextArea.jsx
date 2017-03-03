import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

/**
 * Class representing a label and a textarea element
 *
 * Required props:
 * - label: Sets the text for the input's label
 *
 * Optional props:
 * - id: sets the id attribute for the input and the <label for... attribute
 * - value: string. If present pre-populates the input with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 */
export default class TextArea extends Component {
  /**
   * constructor
   * @param {Object} props The props that will be applied to this component.
   * Set initial state
   * Value: Text inside the text area.
   * isPristine: tracks if user has typed in the input
   * isValid: tracks if the field is valid based on passed validators
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);

    let pristine = true;
    if ( this.props.value || this.props.errorMessage) {
      pristine = false;
    }

    this.state = {
      value: this.props.value ||  '',
      isPristine: pristine,
      isValid: false,
      hasError: this.props.errorMessage ? true : false,
      errorMessageBody : this.props.errorMessage
    };
  }

  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  /**
   * If errorMessage is updated after initial render, adjust the state accordingly
   */
  componentWillReceiveProps({errorMessage}) {
    if (errorMessage) {
      this.setState({
        isPristine: false,
        isValid: false,
        hasError: true,
        errorMessageBody : errorMessage
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
        <InputLabel htmlFor={this.id} required={this.props.required} label={this.props.label} />

        {errorMessage}

        <textarea
          id={this.id}
          name={this.props.id}
          value={this.state.value}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
        ></textarea>
      </div>
    );
  }

  /**
   * Checks textarea value against required status
   */
  _validate() {
    // Check if field is required and empty
    if (this.props.required && !this.state.value) {
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

  /**
   * Actions when user moves focus away from the field
   */
  _handleBlur() {
    if (this.props.required && !this.state.isPristine) {
      this._validate();
    }
  }

  /**
   * This function runs every time the user changes the contents of the input.
   * @param {event} event The event
   */
  _handleChange(event) {
    this.setState({value: event.target.value}, () => {
      // React docs suggest this callback should generally go in ComponentDidUpdate,
      // however since both this callback actions update the state, they must
      // go here because changing state in ComponentDidUpdate would cause a
      // recursive loop and blow up the call stack
      if (this.state.value && this.state.isPristine) {
        this.setState({isPristine: false});
      }
      if (this.state.hasError) {
        this._validate();
      }
    });
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string
};
