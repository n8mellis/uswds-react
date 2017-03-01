import React, { PropTypes } from 'react';

/**
 * Label for form fields
 * @returns {node} the rendered DOM node
 * @param {string} label required - text for the input's label
 * @param {string} htmlFor required - sets the <label for... attribute
 * @param {bool} required defaults to false. Adds required label
 */
export default function InputLabel ({label, htmlFor, required}) {
  return (
    <label
      id={`${htmlFor}-label`}
      className={required ? 'usa-input-required' : null}
      htmlFor={htmlFor}>
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool
};
