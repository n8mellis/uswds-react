import React, { PropTypes } from 'react';

/**
 * Column container aka Grid.
 * You should put columns inside a Grid
 * @param {[bool]} full defaults to false -- if true, removes padding
 * @param {[node]} children Children
 * @returns {[node]} the rendered DOM node
 */
export function Grid ({full, children}) {
  return (
    <div className={full ? 'usa-grid-full' : 'usa-grid'}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Grid.defaultProps = {
  full: false
};

/**
 * Column that goes in a Grid that makes a grid
 * @param {[string]} width width of the column
 * @param {[node]} children Children
 * @returns {[node]} the rendered DOM node
 */
export function Col({width, children}) {
  let widthClass = 'usa-width-';
  
  switch(width) {
  case '1/1':
  case '12':
    widthClass += 'one-whole';
    break;
  case '1/2':
  case '6':
    widthClass += 'one-half';
    break;
  case '1/3':
  case '4':
    widthClass += 'one-third';
    break;
  case '2/3':
  case '8':
    widthClass += 'two-thirds';
    break;
  case '1/4':
  case '3':
    widthClass += 'one-fourth';
    break;
  case '3/4':
  case '9':
    widthClass += 'three-fourths';
    break;
  case '1/6':
  case '2':
    widthClass += 'one-sixth';
    break;
  case '5/6':
  case '10':
    widthClass += 'five-sixths';
    break;
  case '1/12':
  case '1':
    widthClass += 'one-twelfth';
    break;
  case '5/12':
  case '5':
    widthClass += 'five-twelfths';
    break;
  case '7/12':
  case '7':
    widthClass += 'seven-twelfths';
    break;
  default:
    widthClass += 'one-whole';
  }
  
  return (
    <div className={widthClass}>
      {children}
    </div>
  );
}

Col.propTypes = {
  width: PropTypes.oneOf([
    '1/1',
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '3/4',
    '1/6',
    '5/6',
    '1/12',
    '5/12',
    '7/12',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '12'
  ]).isRequired,
  children: PropTypes.node
};
