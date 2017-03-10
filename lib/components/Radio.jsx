import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

/**
 * A radio button and a label
 *
 * Required props
 * - label, string -- Text for the label
 *
 * Optional props
 * - id, string -- input's id and label's for attributes
 * - name, string, defaults to 'radios' -- Sets name attribute
 * - value, string, defaults to id -- Sets value attribute
 * - checked, bool -- If true, item is initially set to checked
 * - disabled, bool --If item, item is disabled
 */
export default class Radio extends Component {

  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  /**
   * Renders the DOM node
   * @returns {node} div that includes the input and label
   */
  render () {
    const {label, className, disabled, id = this.id, value, ...otherProps} = this.props;

    return (
      <div className={className}>
        <input
          type="radio"
          disabled={disabled}
          aria-disabled={disabled}
          id={id}
          value={value ? value : id}
          {...otherProps}/>
        <InputLabel htmlFor={id} label={label} />
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: React.PropTypes.func,
  className: React.PropTypes.string
};

Radio.defaultProps = {
  name: 'radios',
  disabled: false,
  defaultChecked: false
};
