import React from "react";
import Label from '../../lib/components/Label';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';


/**
 * Labels content
 * @returns {[node]} The rendered DOM node
 */
export default function LabelsContainer() {
  return (
    <DocsPage title="Labels">
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import Label from './lib/components/Label';`}
        </Highlight>
      </DocsSection>

      <DocsSection title="Props">
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>children  <Label>Required</Label></TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Text to display inside the pill</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>size</TableHeaderCell>
            <TableCell>oneOf['normal', 'big']</TableCell>
            <TableCell>'normal'</TableCell>
            <TableCell>Sets the size</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      <DocsSection title="Accessibility">
        <p>When labels are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change. This should most likely be handled on the parent and not the label.</p>
      </DocsSection>

      <DocsSection title="Usage">
        <DocsExample>
          <DocsPreview>
            <h6>Small</h6>
            <Label>New</Label>

            <h6>Large</h6>
            <Label size="big">New</Label>
          </DocsPreview>
          <Highlight className="javascript">
{`<h6>Small</h6>
<Label>New</Label>

<h6>Large</h6>
<Label size="big">New</Label>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>

  );
}
