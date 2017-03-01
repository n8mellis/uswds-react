import React, { PropTypes } from 'react';

/**
 * The Label component shows a colored pill of text.
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * @returns {node} The rendered DOM node
 * @param {string} size  If 'big', makes the font size larger
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default function Label ({size, children}) {
  let style = size === 'big' ? 'usa-label-big' : 'usa-label';
  
  return (
    <span className={style}>{children}</span>
  );
}

const SIZE_BIG = 'big';
const SIZE_NORMAL = 'normal';

Label.propTypes = {
  size: PropTypes.oneOf([
    SIZE_BIG,
    SIZE_NORMAL
  ]),
  children: PropTypes.node.isRequired
};

Label.defaultProps = {
  size: SIZE_NORMAL
};
