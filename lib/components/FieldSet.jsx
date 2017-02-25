import React, { PropTypes } from 'react';

/**
 * The FieldSet is used to group two or more checkboxes or radio buttons together.
 * 
 * This component returns a <fieldset> with a legend, which is necessary for screen readers. 
 * Many screen readers will read the legend for each control, so it shoud be 
 * brief and descriptive.
 *
 * As a convenience, passing a name property will give that name to each 
 * Checkbox or radio button child so they will all be the same. 
 * 
 * @param {string, required} legend  Screen-reader only label of what the radio group represents
 * @param {string} name Applies this name to all the children
 * @param {node} children Expected to be Checkbox components
 * 
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
  name: PropTypes.string,
  children: PropTypes.node
};
