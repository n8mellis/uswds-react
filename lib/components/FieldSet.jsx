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
 * @param {string} legend  required. Screen-reader only label of what the radio group represents
 * @param {node} children required. Expected to be Checkbox components
 * @param {string} name Applies this name to all the children
 */
export default function FieldSet({name, children, legend}) {
  let newKids;
  if (name) {
    newKids = React.Children.map(
      children, (child) => React.cloneElement(child, {name: name})
    );
  } else {
    newKids = children;
  }

  return (
    <fieldset className="usa-fieldset-inputs usa-sans">
      <legend className="usa-sr-only">
        {legend}
      </legend>

      {newKids}

    </fieldset>
  );
}

FieldSet.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string
};
