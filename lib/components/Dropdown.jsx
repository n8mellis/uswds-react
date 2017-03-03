import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

/**
 * Class representing a dropdown
 *
 * This component expects that its children will be <options> elements
 *
 * Required props:
 * - label: string. Sets the text for the input's label
 * - children: node. Series of <option> elements
 *
 * Optional props:
 * - id: string. Sets the select's id attribute nd the label's for attribute
 * - value: string. Sets default select choice. Must match the value of one of the <option> elements. Or if an empty string, a blank placeholder is added.
 * - required: bool. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 */
export default class Dropdown extends Component {
  /**
   * Constructor
   * @param {object} props The props. See proptypes below.
   *
   * Set initial state
   * value: default selected option passed from a prop
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
      hasError: this.props.errorMessage ? true : false,
      errorMessageBody: this.props.errorMessage ? this.props.errorMessage : null
    };
  }

  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  /**
   * If a errorMessage is passed after initial render, adjust the state accordingly
   */
  componentWillReceiveProps({errorMessage}) {
    if (errorMessage) {
      this.setState({
        hasError: true,
        errorMessageBody: errorMessage
      });
    }
  }

  /**
   * Update the state when user selects a new option
   * @param {event} event The async event
   */
  _handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @returns {node} The rendered DOM node
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

    let emptyPlaceholder = null;

    if (this.state.value == '') {
      emptyPlaceholder = (<option disabled value="">Select ...</option>);
    }

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <InputLabel htmlFor={this.id} required={this.props.required} label={this.props.label} />

        {errorMessage}

        <select
          name={this.props.id}
          id={this.id}
          value={this.state.value}
          onChange={this._handleChange.bind(this)} >
            {emptyPlaceholder}
            {this.props.children}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string
};

Dropdown.defaultProps = {
  required: false,
  hasError: false
};
