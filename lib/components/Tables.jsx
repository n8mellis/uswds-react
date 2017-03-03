import React, { Component, PropTypes } from 'react';

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - n
 *
 * Optional props:
 * - borderless: bool, defaults to false -- if true, removes verticale cell borders
 * - caption: string -- if passed, adds a caption element
 * - columns: array -- the titles of the columns,
 * - data: array -- table boy's row and column data
 * - children: node -- If data is empty, then children will be the rows and cells
 */
export class Table extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    borderless: PropTypes.bool,
    caption: PropTypes.string,
    data: PropTypes.array,
    children: PropTypes.node
  };

  static defaultProps = {
    borderless: false
  };

  /**
   * constructor
   * @param {object} props The component props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Generates the table header cells
   * @returns {node} <th> elements
   */
  _renderHeaders() {
    // Loop over the props.columns array
    return this.props.columns.map((column, index) => {
      // if each item in the array is a string, then use that inside the <th>
      if (typeof column === 'string') {
        return <TableHeaderCell scope="col" key={index}>{column}</TableHeaderCell>;
      // else expect an object.
      // Use object.displayName for the <th> text or colId is displayName is not provided
      } else {
        let {colId, displayName} = column;
        return <TableHeaderCell scope="col" key={index}>{displayName || colId}</TableHeaderCell>;
      }
    });
  }

  /**
   * Renders the table rows if data is passed in
   * @param {array} data from props.data
   * @returns {node} rendered DOM node (<tr><td>...</tr>)
   */
  _renderRows(data) {
    // Loop over the data array
    return data.map((datum, rowKey) => {
      // Loop over columns array to get the colIds
      const cells = this.props.columns.map(({colId}, key) => {
        // if it's the first cell in the row, make it a <th>
        if (key === 0) {
          return (
            <TableHeaderCell scope="row" key={key}>
              {datum[colId]}
            </TableHeaderCell>
          );
        // else make it a <td>
        } else {
          return (
            <TableCell key={key}>
              {datum[colId]}
            </TableCell>
          );
        }
      });
      // return a row with all the cells for each item in columns array
      return <TableRow key={rowKey}>{cells}</TableRow>;
    });
  }

  /**
   * @returns {node} DOM node (table)
   */
  render() {
    return (
      <table className={this.props.borderless ? 'usa-table-borderless' : null}>
        {/* If a caption was provided, render it */}
        {this.props.caption
          ? <caption>{this.props.caption}</caption>
          : null}

        <thead>
          <tr>{this._renderHeaders()}</tr>
        </thead>

        <tbody>
          {/* If data was passed, use it to render rows. Else use children */}
          {this.props.data
            ? this._renderRows(this.props.data)
            : this.props.children}
        </tbody>
      </table>
    );
  }
}

/**
 * A table row element
 *
 * @returns {node} the rendered DOM node
 * @param {object} props  The children
 */
export function TableRow (props) {
  let {children,  ...otherProps} = props;
  return (
    <tr {...otherProps}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired
};


/**
 * A table header cell element
 *
 * @returns {node} the rendered DOM node
 * @param {object} children  The children
 */
export function TableHeaderCell ({children, ...otherProps}) {
  return (
  <th {...otherProps}>
    {children}
  </th>
  );
}

TableHeaderCell.propTypes = {
  scope: PropTypes.oneOf([
    'col',
    'row'
  ]).isRequired,
  children: PropTypes.node.isRequired
};

TableHeaderCell.defaultProps = {
  scope: 'row'
};


/**
 * A table cell element
 *
 * @returns {node} the rendered DOM node
 * @param {object} props  The props
 */
export function TableCell (props) {
  let {children, ...otherProps} = props;
  return (
    <td {...otherProps}>
      {children}
    </td>
  );
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired
};
