import React, { PropTypes } from 'react';

/**
 * The Label component shows a colored pill of text.
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * 
 * @param {bool} big  If true, makes the font size larger
 * @param {node, required} children Expected to be the text to display inside the pill
 */
export default function Label ({big, children}) {
  let style = 'usa-label';
  if (big) { style += '-big'; }
  
  return (
    <span className={style}>{children}</span>
  );
}

Label.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Label.defaultProps = {
  big: false
};
