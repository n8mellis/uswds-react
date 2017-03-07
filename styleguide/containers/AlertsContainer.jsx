import React from 'react';
import Alert from '../../lib/components/Alert';
import Label from '../../lib/components/Label';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';

/**
 * Alerts content
 */
export default class AlertsContainer extends React.Component {
  /**
   * Renders the node
   * @returns {node} the rendered DOM node
   */
  render() {
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
    const longMessage = (<div><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p><p>Not what you expected? <a href="#">Go back.</a></p></div>);
    
    return (
      <div className="styleguide-content usa-content">
        <header>
          <p className="site-subheading">UI components</p>
          <h1>Alerts</h1>
        </header>
        {/* <p className="usa-font-lead">
          {this.props.summary}
        </p> */}
        
        {/* <section>
          <h3>Dependencies</h3>
          <p>React-superthingy is used to do something that we didn’t want to redo because the wheel’s already been invented</p>
          <Highlight className="bash">npm install react-superthingy --save-dev</Highlight>
        </section> */}
        
        {/* <section>
          <h3>Importing</h3>
          <p>You can auto-populated Thingy by passing in data. In this case you only need Component1</p>
          <Highlight language="javascript">
            {`import { Component } from './lib/components/Thingy';`}
          </Highlight>
          
          <p>If constructing manually, import all the subcomponents</p>
          <Highlight language="javascript">
            {`import { Component, OtherComponent, OtherOther } from './lib/components/Thingy';`}
          </Highlight>
        </section> */}
        
        <section>
          <h3>Importing</h3>
          <Highlight language="javascript">
            {`import Alert from './lib/components/Alert';`}
          </Highlight>
        </section>
        
        <section>
          <h3>Props</h3>
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
              <TableCell>oneOf['success', 'warning', 'error', 'info']</TableCell>
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
        </section>
        
        <section>
          <h3>Example usage</h3>
          
          <div className="example">
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
          </div>
          

          <div className="example">
            <div className="preview">
              <Alert
                type="success"
                title="Success Status"
                body={message}/>
            </div>
            <Highlight className="javascript">
              {`<Alert type="success" title="Success Status" body={message} />`}
            </Highlight>
          </div>
          
          <div className="example">
            <div className="preview">
              <Alert
                type="warning"
                title="Warning Status"
                body={message}/>
            </div>
            <Highlight className="javascript">
              {`<Alert type="warning" title="Warning Status" body={message} />`}
            </Highlight>
          </div>
          
          <div className="example">
            <div className="preview">
              <Alert
                type="error"
                title="Error Status"
                body={message}/>
            </div>
            <Highlight className="javascript">
              {`<Alert type="error" title="Error Status" body={message} />`}
            </Highlight>
          </div>
          
          <div className="example">
            <h4>Info alert with HTML in the body</h4>
            <div className="preview">
              <Alert
                title="Info Status"
                body={longMessage}/>
            </div>
            <Highlight className="javascript">
              {`<Alert title="Info Status" body={longMessage} />`}
            </Highlight>
          </div>
        </section>
      </div>

    );
  }
}

AlertsContainer.defaultProps = {
  title: 'Alerts'
};
