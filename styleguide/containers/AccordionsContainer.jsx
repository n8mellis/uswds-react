import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
// import Label from '../../lib/components/Label';
import { Accordion, AccordionItem } from "../../lib/components/Accordion";


/**
 * AccordionsContainer content
 * @returns {node} the node
 */
export default function AccordionsContainer() {
  return (
    <DocsPage title="Accordion">
      
      {/* Importing */}
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import { Accordion, AccordionItem } from "./lib/components/Accordion";`}
        </Highlight>
      </DocsSection>

      {/* Props */}
      <DocsSection title="Props">
        <h4>Accordion</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>type</TableHeaderCell>
            <TableCell>oneOf[Accordion.TYPE_BORDERLESS, Accordion.TYPE_BORDERED]</TableCell>
            <TableCell>Accordion.TYPE_BORDERLESS</TableCell>
            <TableCell>If the accordion has a border or not</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>startCollapsed</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>???? If true, all accordion items will be collapsed when the page loads ?????????????</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Expected to be AccordionItems</TableCell>
          </TableRow>
        </Table>

        <h4>AccordionItem</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>title</TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell><em>empty string</em></TableCell>
            <TableCell>Text that appears in the header area</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>expanded</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>???? If true, item is expanded by default ?????? </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>The content to be shown or hidden based on if the accordian item is collapsed or not.</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>accordionIndex</TableHeaderCell>
            <TableCell>number</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>**Not sure what this does</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>action</TableHeaderCell>
            <TableCell>func</TableCell>
            <TableCell><em>empty function</em></TableCell>
            <TableCell>**Not sure what this does</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage">
        <DocsExample>
          <h4>Borderless accordion</h4>
          <DocsPreview>
            <Accordion>
              <AccordionItem title="First Amendment">
                <p>
                  Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
                </p>
              </AccordionItem>
              <AccordionItem title="Second Amendment">
                <p>
                  A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
                </p>
              </AccordionItem>
              <AccordionItem>
                <span>Third Amendment</span>
                <p>
                  No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
                </p>
              </AccordionItem>
            </Accordion>
          </DocsPreview>
          <Highlight className="html">
{`<Accordion>
  <AccordionItem title="First Amendment">
    <p>
      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </p>
  </AccordionItem>
  <AccordionItem title="Second Amendment">
    <p>
      A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span>Third Amendment</span>
    <p>
      No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
    </p>
  </AccordionItem>
</Accordion>`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h4>Bordered accordion</h4>
          <DocsPreview>
            <Accordion type={Accordion.TYPE_BORDERED}>
              <AccordionItem title="First Amendment">
                <p>
                  Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
                </p>
              </AccordionItem>
              <AccordionItem title="Second Amendment">
                <p>
                  A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
                </p>
              </AccordionItem>
              <AccordionItem>
                <span>Third Amendment</span>
                <p>
                  No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
                </p>
              </AccordionItem>
            </Accordion>
          </DocsPreview>
          <Highlight className="html">
{`<Accordion type={Accordion.TYPE_BORDERED}>
  <AccordionItem title="First Amendment">
    <p>
      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </p>
  </AccordionItem>
  <AccordionItem title="Second Amendment">
    <p>
      A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span>Third Amendment</span>
    <p>
      No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
    </p>
  </AccordionItem>
</Accordion>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
