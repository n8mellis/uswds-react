import React from 'react';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import Label from '../../lib/components/Label';
import Alert from '../../lib/components/Alert';



/**
 * Displays the Styleguide content for Alerts.
 * @returns {[node]} The rendered DOM node
 */
export default function AlertsContainer () {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
  const longMessage = (<div><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p><p>Not what you expected? <a href="#">Go back.</a></p></div>);

  return (
    <DocsPage title="Alerts">

      {/* Importing */}
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import Alert from './lib/components/Alert';`}
        </Highlight>
      </DocsSection>

      {/* Props */}
      <DocsSection title="Props">
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>title  <Label>Required</Label></TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>the text for the title</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>body  <Label>Required</Label></TableHeaderCell>
            <TableCell>string or node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>the text for the body/description</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>type</TableHeaderCell>
            <TableCell>oneOf ['success', 'warning', 'error', 'info']</TableCell>
            <TableCell>'info'</TableCell>
            <TableCell>sets the background color and icon</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>role</TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>*see description</TableCell>
            <TableCell>Sets the ARIA role property. If the alert has type="error" and no role is specified, role="alert" is automatically added. Use "alert"to inform of a time-sensitive and important message that is not interactive. If the message is interactive, use "alertdialog" instead</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      {/* Accessibility */}
      <DocsSection title="Accessibility">
        <p>
          Because of its intrusive nature, the ARIA alert role (role="alert") must be used sparingly and only in situations where the user's immediate attention is required. It's appropriate for instances such as
        </p>
        <ul>
          <li>An invalid value was entered into a form field</li>
          <li>The user's login session is about to expire</li>
          <li>The connection to the server was lost, local changes will not be saved</li>
        </ul>
        <p>
          Read more: <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role">Mozilla: Using the alert role</a>
        </p>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage">
        <DocsExample>
          <h4>The alert body can be a string, or if HTML formatting is needed, a React element</h4>
          <Highlight className="javascript">
{`let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';

let longMessage = (
  <div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
    <p>Not what you expected? <a href="#">Go back</a>.</p>
  </div>
);`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h4>Alert with HTML in the body</h4>
          <DocsPreview>
            <Alert title="Info Status" body={longMessage}/>
          </DocsPreview>
          <Highlight className="html">
            {`<Alert title="Info Status" body={longMessage} />`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h4>Alerts with the body passed as a string</h4>
          <DocsPreview>
            <Alert type="success" title="Success Status" body={message}/>
            <Alert type="warning" title="Warning Status" body={message}/>
            <Alert type="error" title="Error Status" body={message}/>
          </DocsPreview>
          <Highlight className="html">
            {`<Alert type="success" title="Success Status" body={message} />
<Alert type="warning" title="Warning Status" body={message} />
<Alert type="error" title="Error Status" body={message} />`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
