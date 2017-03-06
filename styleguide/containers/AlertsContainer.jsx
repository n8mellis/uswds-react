import React from 'react';
import Alert from '../../lib/components/Alert';
import BaseContainer from './BaseContainer';

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
    const longMessage = (<div><p>Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p><p>Not what you expected? <a href="#">Go back.</a></p></div>);
    
    return (
      <BaseContainer {...this.props}>
        <div className="preview">
          <Alert
            type="success"
            title="Success Status"
            body={message}/>
          <Alert
            type="warning"
            title="Warning Status"
            body={message}/>
          <Alert
            type="error"
            title="Error Status"
            body={message}/>
          <Alert
            type="info"
            title="Information Status"
            body={message}/>
          <Alert
            title="Information Status"
            body={longMessage}/>
        </div>
        
        <div>
          <h5>Example usage</h5>
          <pre><code>
            {`<Alert type="error" role="alert" title="An error has occured" body="Could not load file from the server"/>`}
          </code></pre>
          <h5>Required props</h5>
          <ul>
            <li><code>title</code> <em>string</em> — the text for the title.</li>
            <li><code>body</code> <em>string</em> — the text for the body/description.</li>
          </ul>
          
          <h5>Optional props</h5>
          <ul>
            <li>
              <code>type</code> <em>string, defaults to 'info'</em> — sets the background color and icon. Must be <code>"success"</code>, <code>"warning"</code>, <code>"error"</code>, or <code>"info"</code>.
            </li>
            <li>
              <code>role</code> <em>string</em> — Sets the ARIA <code>role</code> property. If the alert has <code>type="error"</code> and no role is specified, <code>role="alert"</code> is automatically added. Use <code>"alert"</code>to inform of a time-sensitive and important message that is not interactive. If the message is interactive, use <code>"alertdialog"</code> instead. 
            </li>
          </ul>
        </div>
      </BaseContainer>
    );
  }
}

AlertsContainer.defaultProps = {
  title: 'Alerts',
  summary: 'Alerts keep users informed of important and sometimes time-sensitive changes.'
};
