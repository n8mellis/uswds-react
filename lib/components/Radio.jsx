import React, { PropTypes } from 'react';
import InputLabel from './InputLabel';

/**
 * A radio button and a label 
 * 
 * @param {string, required} id input's id and label's for attributes
 * @param {string, required} label Text for the label
 * @param {string} name defaults to 'radios'. Sets name attribute
 * @param {string} value defaults to id, Sets value attribute.
 * @param {bool} checked  If true, item is initially set to checked
 * @param {bool} disabled If item, item is disabled
 */
export default function Radio({id, label, name, value, checked, disabled}) {
  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        value={value ? value : id}
        defaultChecked={checked}
        disabled={disabled}
      />

      <InputLabel htmlFor={id} label={label} />
    </div>
  );
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
