import React, { PropTypes } from 'react';

/**
 * The Field set is used to group two or more checkboxes or radio buttons together.
 *
 * This component returns a <fieldset> with a legend, which is necessary for screen readers.
 * Many screen readers will read the legend for each control, so it shoud be
 * brief and descriptive.
 *
 * As a convenience, passing a name property will give that name to each
 * Checkbox or radio button child so they will all be the same.
 * @returns {node} The rendered DOM node
 * @param {object} props  The props
 */
export default function FieldSet(props) {
  let {name, children, onChange, legend, ...otherProps} = props;
  if (name) {
    children = React.Children.map(children, child => React.cloneElement(child, {name, onChange: onChange}));
  }

  return (
    <fieldset className="usa-fieldset-inputs usa-sans" {...otherProps}>
      <legend className="usa-sr-only">
        {legend}
      </legend>

      {children}

    </fieldset>
  );
}

FieldSet.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func
};
