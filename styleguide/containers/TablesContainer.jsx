import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import Label from '../../lib/components/Label';

/**
 * Displays the Styleguide content for Tables.
 */
export default function TablesContainer() {
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
    <DocsPage title="Tables">
      <DocsSection title="Importing">
        <h5>Import all the table components if manually building a table</h5>
        <Highlight language="javascript">
          {`import { Table, TableRow, TableHeaderCell, TableCell } from './lib/components/Tables';`}
        </Highlight>

        <h5>If your generating a table with data you only need Table</h5>
        <Highlight language="javascript">
          {`import { Table } from './lib/components/Tables';`}
        </Highlight>
      </DocsSection>

      <DocsSection title="Props">
        <h5>Table</h5>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>cols  <Label>Required</Label></TableHeaderCell>
            <TableCell>array</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>
              Used to generate the column headers. Either an array of strings (manual coding required) or an array of objects. Each object should have a <code>colId</code> key and, optionally, a <code>displayName</code> key.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>borderless</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>If true, removes the outside and vertical cell borders</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>caption</TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell></TableCell>
            <TableCell>If included, adds a caption with the caption text</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>data</TableHeaderCell>
            <TableCell>array of objects</TableCell>
            <TableCell></TableCell>
            <TableCell>
              Used to automatically generate rows and cells. Each object should contain a key that matches the <code>colId</code>s in the columns property.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell></TableCell>
            <TableCell>If data is not passed, children will include as many <code>TableRow</code>, <code>TableHeaderCell</code>, <code>TableCell</code> as needed</TableCell>
          </TableRow>
        </Table>

        <h5>TableHeaderCell</h5>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>scope  <Label>Required</Label></TableHeaderCell>
            <TableCell>oneOf ['col', 'row']</TableCell>
            <TableCell>'row'</TableCell>
            <TableCell>
              Added for accessibility. Rows in the table body should start with a TableHeaderCell with scope="row". Header cells automatically have scope="col" inserted.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell></TableCell>
            <TableCell>Contents of the cell</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell><em>other props</em></TableHeaderCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Passes down additional props to the HTML element</TableCell>
          </TableRow>
        </Table>

        <h5>TableRow</h5>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell></TableCell>
            <TableCell>Expects <code>TableCell</code>'s or <code>TableHeaderCell</code>'s</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell><em>other props</em></TableHeaderCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Passes down additional props to the HTML element</TableCell>
          </TableRow>
        </Table>

        <h5>TableCell</h5>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell></TableCell>
            <TableCell>Contents of the cell</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell><em>other props</em></TableHeaderCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Passes down additional props to the HTML element</TableCell>
          </TableRow>
        </Table>
      </DocsSection>
    </DocsPage>
  );
}

//
// <BaseContainer {...this.props}>
//   <div className="preview">
//     <h6>Bordered Table</h6>
//     <Table caption="Populated with passed data" columns={cols} data={data} />
//
//     <h6>Borderless Table</h6>
//     <Table borderless caption="Manually created body" columns={['Document title', 'Description', 'Year']}>
//         <TableRow>
//           <TableHeaderCell scope="row"><a href="#">Declaration of Independence</a></TableHeaderCell>
//           <TableCell>Statement adopted by the Continental Congress declaring independence from the British Empire.</TableCell>
//           <TableCell>1776</TableCell>
//         </TableRow>
//
//         <TableRow>
//           <TableHeaderCell scope="row"><a href="#">Bill of Rights</a></TableHeaderCell>
//           <TableCell>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</TableCell>
//           <TableCell>1791</TableCell>
//         </TableRow>
//
//         <TableRow>
//           <TableHeaderCell scope="row"><a href="#">Declaration of Sentiments</a></TableHeaderCell>
//           <TableCell>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</TableCell>
//           <TableCell>1848</TableCell>
//         </TableRow>
//
//         <TableRow>
//           <TableHeaderCell scope="row"><a href="#">Emancipation Proclamation</a></TableHeaderCell>
//           <TableCell>An executive order granting freedom to slaves in designated southern states.</TableCell>
//           <TableCell>1863</TableCell>
//         </TableRow>
//     </Table>
//   </div>
//
//   <div>
//     <h5>Example usage, automated generation</h5>
//     <pre><code>
//       {`const columns = [
// {
// colId: 'one',
// displayName: 'First column'
// },
// {
// colId: 'two',
// displayName: 'Second column'
// }
// ];
// const data =[
// {
// one: 'row 1, col 1',
// two: 'row 1, col 2'
// },
// {
// one: 'row 2, col 1',
// two: 'row2, col 2'
// }
// ];
//
// <Table columns={columns} data={data} />`}
//     </code></pre>
//
//     <h5>Example usage, manual</h5>
//     <pre><code>
//       {`<Table columns={['Column 1', 'Column 2']}>
// <TableRow>
// <TableHeaderCell>row 1, col 1</TableHeaderCell>
// <TableCell>row 1, col 2</TableCell>
// </TableRow>
// <TableRow>
// <TableHeaderCell>row 2, col 1</TableHeaderCell>
// <TableCell>row 2, col 2</TableCell>
// </TableRow>
// </Table>`}
//     </code></pre>
//
//     <h5>Required props</h5>
//     <ul>
//       <li><code>columns</code> <em>array</em> — Used to generate the column headers. Either an array of strings (manual coding required) or an array of objects. Each object should have a <code>colId</code> key and, optionally, a <code>displayName</code> key.</li>
//     </ul>
//
//     <h5>Optional props</h5>
//     <ul>
//       <li>
//         <code>data</code> <em>array of objects</em> — Used to automatically generate rows and cells. Each object should contain a key that matches the <code>colId</code>s in the columns property.
//       </li>
//       <li>
//         <code>caption</code> <em>string</em> — If included, adds a caption with the caption text.
//       </li>
//       <li>
//         <code>borderless</code> <em>bool</em> — If true, removes the outside and vertical cell borders.
//       </li>
//     </ul>
//   </div>
//
// </BaseContainer>
