import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
// import './Checkbox.css';

/**
 * Checkbox with label
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
