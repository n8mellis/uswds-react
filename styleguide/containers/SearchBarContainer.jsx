import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import Label from '../../lib/components/Label';
import SearchField from "../../lib/components/SearchField";

/**
 * Displays the Styleguide content for Search Bars.
 */
export default class SearchBarContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <DocsPage title="Search bar">      
        
        {/* Dependencies */}
        <DocsSection title="Dependencies">
          <h5>Explain what the 3rd-party dependency is and what it does</h5>
          <Highlight className="bash">
            {`npm install --save react-thirdpartything`}
          </Highlight>
        </DocsSection>
        
        {/* Importing */}
        <DocsSection title="Importing">
          <Highlight className="javascript">
            {`import XXXX from '../lib/components/XXXX';`}
          </Highlight>
        </DocsSection>
        
        {/* Props */}
        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>propName  <Label>Required</Label></TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>What_it_does</TableCell>
            </TableRow>
          </Table>
        </DocsSection>
        
        {/* Accessibility */}
        <DocsSection title="Accessibility"></DocsSection>
        
        {/* Usage */}
        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <div className="usa-width-one-half">
                <h6>Search Big</h6>
                <SearchField size={SearchField.SIZE_BIG} />
                {/* <SearchField /> */}
                <h6>Search Medium</h6>
                <SearchField size={SearchField.SIZE_MEDIUM} />
                <h6>Search Small</h6>
                <SearchField size={SearchField.SIZE_SMALL} />
              </div>
            </DocsPreview>
            <Highlight className="html">
{`<div className="usa-width-one-half">
<h6>Search Big</h6>
<SearchField size={SearchField.SIZE_BIG} />
{/* <SearchField /> */}
<h6>Search Medium</h6>
<SearchField size={SearchField.SIZE_MEDIUM} />
<h6>Search Small</h6>
<SearchField size={SearchField.SIZE_SMALL} />
</div>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
          
      </DocsPage>
      
    );
  }
}
