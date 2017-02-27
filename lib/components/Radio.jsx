import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';

/**
 * A radio button and a label 
 *
 * Required props
 * - id, string -- input's id and label's for attributes
 * - label, string -- Text for the label
 *
 * Optional props
 * - name, string, defaults to 'radios' -- Sets name attribute
 * - value, string, defaults to id -- Sets value attribute
 * - checked, bool -- If true, item is initially set to checked
 * - disabled, bool --If item, item is disabled
 */
export default class Radio extends Component {
  /**
   * constructor
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }
  
  /**
   * Renders the DOM node
   * @returns {node} div that includes the input and label
   */
  render () {
    return (
      <div>
        <input
          id={this.props.id}
          type="radio"
          name={this.props.name}
          value={this.props.value ? this.props.value : this.props.id}
          defaultChecked={this.props.checked}
          disabled={this.props.disabled} />

        <InputLabel htmlFor={this.props.id} label={this.props.label} />
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Radio.defaultProps = {
  name: 'radios'
};
