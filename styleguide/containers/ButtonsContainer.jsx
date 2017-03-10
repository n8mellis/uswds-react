import React from "react";
import Label from '../../lib/components/Label';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import PrimaryButton from "../../lib/components/PrimaryButton";

/**
 * Buttons content
 * @returns {node} node
 */
export default function ButtonsContainer () {
  return (
    <DocsPage title="Buttons">
      
      {/* Importing */}
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import PrimaryButton from "../lib/components/PrimaryButton";`}
        </Highlight>
      </DocsSection>

      {/* Props */}
      <DocsSection title="Props">
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>text  <Label>Required</Label></TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>disabled</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>If true, makes button disabled</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>onClick</TableHeaderCell>
            <TableCell>func</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>size</TableHeaderCell>
            <TableCell>oneOf ['', 'PrimaryButton.SIZE_BIG']</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>status</TableHeaderCell>
            <TableCell>oneOf [''', PrimaryButton.STATUS_ACTIVE, PrimaryButton.STATUS_HOVER']</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage">
        <DocsExample>
          <DocsPreview>
            <h6>Primary Buttons</h6>
            <div className="button_wrapper">
              <PrimaryButton text={'Default'} />
              <PrimaryButton text={'Active'} status={PrimaryButton.STATUS_ACTIVE} />
              <PrimaryButton text={'Hover'} status={PrimaryButton.STATUS_HOVER} />
            </div>
            <h6>Disabled Button</h6>
            <div className="button_wrapper">
              <PrimaryButton text={'Default'} status={PrimaryButton.STATUS_DISABLED} />
            </div>
            <h6>Big Button</h6>
            <div className="button_wrapper">
              <PrimaryButton text={'Default'} size={PrimaryButton.SIZE_BIG} />
            </div>
          </DocsPreview>
          <Highlight className="html">
{`<h6>Primary Buttons</h6>
<div className="button_wrapper">
  <PrimaryButton text={'Default'} />
  <PrimaryButton text={'Active'} status={PrimaryButton.STATUS_ACTIVE} />
  <PrimaryButton text={'Hover'} status={PrimaryButton.STATUS_HOVER} />
</div>
<h6>Disabled Button</h6>
<div className="button_wrapper">
  <PrimaryButton text={'Default'} status={PrimaryButton.STATUS_DISABLED} />
</div>
<h6>Big Button</h6>
<div className="button_wrapper">
  <PrimaryButton text={'Default'} size={PrimaryButton.SIZE_BIG} />
</div>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
