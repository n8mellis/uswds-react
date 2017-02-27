import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
// import './Checkbox.css';

/**
 * Checkbox with label
 *
 * Required props:
 * - label, string -- the text for the label
 * - id, string -- sets the textarea's id attribute the label's for attribute. Required for 508 compliance.
 *
 * Optional props:
 * - value, string -- sets the value attribute. If not provided, the id is used instead.
 * - name, string, defaults to 'checkboxs' -- sets the name attribute. Each item in a fieldset should have the same name.
 * - checked, bool -- if true, the control is selected (checked) by default.
 * - disabled, bool -- if true, disables the control so it can not be toggled.
 */
export default class Checkbox extends Component {  
  /**
   * Renders the component.
   *
   * @returns {Node} The rendered DOM node.
   */
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          type="checkbox"
          name={this.props.name}
          value={this.props.value ? this.props.value : this.props.id}
          defaultChecked={this.props.checked}
          disabled={this.props.disabled}
        />

        <InputLabel htmlFor={this.props.id} label={this.props.label} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  name: 'checkboxes'
};
