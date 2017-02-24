import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';

/**
 * Class representing a dropdown
 *
 * This component expects that its children will be <options> elements
 *
 * Required props:
 * - label: string. Sets the text for the input's label
 * - id: string. Sets the select's id attribute nd the label's for attribute
 * - children: node. Series of <option> elements
 *
 * Optional props:
 * - value: string. Sets default select choice. Must match the value of one of the <option> elements. Or if an empty string, a blank placeholder is added.
 * - required: bool. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 */
export default class Dropdown extends Component {
  /**
   * Set initial state
   * 
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      hasError: false,
      errorMessageBody: null
    };
  }
  
  /**
   * If a errorMessage is passed as props, adjust the state accordingly
   */
  componentWillMount() {
    if (this.props.errorMessage) {
      this.setState({
        hasError: true,
        errorMessageBody: this.props.errorMessage
      });
    }
  }
  
  componentDidMount() {
    if (this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
  
  _handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @returns {node} (div) that includes a label, select 
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
    
    if (this.props.value === '') {
      emptyPlaceholder = (<option disabled value=""> </option>);
    }

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <InputLabel htmlFor={this.props.id} required={this.props.required} label={this.props.label} />

        {errorMessage}

        <select
          name={this.props.id}
          id={this.props.id}
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
  id: PropTypes.string.isRequired,
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
