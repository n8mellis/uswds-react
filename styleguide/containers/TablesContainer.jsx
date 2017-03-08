import React from "react";
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Tables.
 */
export default class TablesContainer extends React.Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const cols = [
      {
        colId: 'title',
        displayName: 'Document title'
      },
      {
        colId: 'desc',
        displayName: 'Description'
      },
      {
        colId: 'Year'
      }
    ];
    const data = [
      {
        title: 'Declaration of Independence',
        desc: 'Statement adopted by the Continental Congress declaring independence from the British Empire.',
        Year: '1776'
      },
      {
        title: 'Bill of Rights',
        desc: 'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
        Year: '1791'
      },
      {
        title: 'Declaration of Sentiments',
        desc: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
        Year: '1848'
      },
      {
        title: 'Emancipation Proclamation',
        desc: 'An executive order granting freedom to slaves in designated southern states.',
        Year: '1863'
      }

    ];

    return (
      <BaseContainer {...this.props}>
        <div className="preview">
          <h6>Bordered Table</h6>
          <Table caption="Populated with passed data" columns={cols} data={data} />

          <h6>Borderless Table</h6>
          <Table borderless caption="Manually created body" columns={['Document title', 'Description', 'Year']}>
              <TableRow>
                <TableHeaderCell scope="row"><a href="#">Declaration of Independence</a></TableHeaderCell>
                <TableCell>Statement adopted by the Continental Congress declaring independence from the British Empire.</TableCell>
                <TableCell>1776</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell scope="row"><a href="#">Bill of Rights</a></TableHeaderCell>
                <TableCell>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</TableCell>
                <TableCell>1791</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell scope="row"><a href="#">Declaration of Sentiments</a></TableHeaderCell>
                <TableCell>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</TableCell>
                <TableCell>1848</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell scope="row"><a href="#">Emancipation Proclamation</a></TableHeaderCell>
                <TableCell>An executive order granting freedom to slaves in designated southern states.</TableCell>
                <TableCell>1863</TableCell>
              </TableRow>
          </Table>
        </div>

        <div>
          <h5>Example usage, automated generation</h5>
          <pre><code>
            {`const columns = [
  {
    colId: 'one',
    displayName: 'First column'
  },
  {
    colId: 'two',
    displayName: 'Second column'
  }
];
const data =[
  {
    one: 'row 1, col 1',
    two: 'row 1, col 2'
  },
  {
    one: 'row 2, col 1',
    two: 'row2, col 2'
  }
];

<Table columns={columns} data={data} />`}
          </code></pre>

          <h5>Example usage, manual</h5>
          <pre><code>
            {`<Table columns={['Column 1', 'Column 2']}>
  <TableRow>
    <TableHeaderCell>row 1, col 1</TableHeaderCell>
    <TableCell>row 1, col 2</TableCell>
  </TableRow>
  <TableRow>
    <TableHeaderCell>row 2, col 1</TableHeaderCell>
    <TableCell>row 2, col 2</TableCell>
  </TableRow>
</Table>`}
          </code></pre>

          <h5>Required props</h5>
          <ul>
            <li><code>columns</code> <em>array</em> — Used to generate the column headers. Either an array of strings (manual coding required) or an array of objects. Each object should have a <code>colId</code> key and, optionally, a <code>displayName</code> key.</li>
          </ul>

          <h5>Optional props</h5>
          <ul>
            <li>
              <code>data</code> <em>array of objects</em> — Used to automatically generate rows and cells. Each object should contain a key that matches the <code>colId</code>s in the columns property.
            </li>
            <li>
              <code>caption</code> <em>string</em> — If included, adds a caption with the caption text.
            </li>
            <li>
              <code>borderless</code> <em>bool</em> — If true, removes the outside and vertical cell borders.
            </li>
          </ul>
        </div>

      </BaseContainer>
    );
  }
}

TablesContainer.defaultProps = {
  title: "Tables",
  summary: "Tables show tabular data in columns and rows."
};
