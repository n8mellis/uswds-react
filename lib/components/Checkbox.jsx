import React, { PropTypes } from 'react';
import InputLabel from './InputLabel';
// import './Checkbox.css';

/**
 * Checkbox with label
 * 
 * @param {string, required} id input's id and label's for attributes
 * @param {string, required} label Text for the label
 * @param {string} name defaults to 'checkboxs'. Sets name attribute
 * @param {string} value Sets value attribute. If not provided the id is used.
 * @param {bool} checked  If true, item is initially set to checked
 * @param {bool} disabled If item, item is disabled
 */
export default function Checkbox({id, label, name, value, checked, disabled }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value ? value : id}
        defaultChecked={checked}
        disabled={disabled}
      />

      <InputLabel htmlFor={id} label={label} />
    </div>
  );
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
