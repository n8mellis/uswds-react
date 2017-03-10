import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';

/**
 * Displays the Styleguide content for Colors.
 */
export default class ColorsContainer extends React.Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <DocsPage title="Colors"></DocsPage>
    );
  }
}
