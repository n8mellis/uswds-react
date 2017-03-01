import React from "react";
import Label from '../../lib/components/Label';

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Labels.
 */
export default class LabelsContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <BaseContainer {...this.props}>
        <div className="preview">
          <h6>Small</h6>
          <Label>New</Label>
          
          <h6>Large</h6>
          <Label size="big">New</Label>
        </div>
        
        <div>
          <h5>Example usage</h5>
          <pre><code>
            {`<Label size="big">New</Label>`}
          </code></pre>
          <h5>Required props</h5>
          <ul>
            <li><code>children</code> <em>node</em> — expected to be the text to display inside the pill.</li>
          </ul>
          
          <h5>Optional props</h5>
          <ul>
            <li><code>size</code> <em>string, defaults to 'normal'</em> — Must be <code>"normal"</code> or <code>"big"</code>.</li>
          </ul>
        </div>
      </BaseContainer>
    );
  }
}

LabelsContainer.defaultProps = {
  title: "Labels",
  summary: "Labels draw attention to new or important content."
};
