import React from "react";

import { Accordion, AccordionItem } from "../../lib/components/Accordion";

/**
 * Provides a common container for all Styleguide sub pages.
 *
 * This component takes `title` and `summary` props that will automatically
 * be rendered into the common format. Its children will then be rendered as
 * the content.
 *
 * Usage:
 * <code>
 * class SampleCodeContainer extends React.Component
 * {
 *   render() {
 *     return (
 *       <BaseContainer title="Sample Code" summary="This is some sample code...">
 *         <p>Sample code...</p>
 *       </BaseContainer>
 *     );
 *   }
 * }
 * </code>
 */
export default class BaseContainer extends React.Component
{
  /**
   * Renders the preview.
   *
   * @returns {Node} The render tree for the preview section.
   */
  renderPreview()
  {
    return (<p>Preview goes here.</p>);
  }

  /**
   * Renders the sample code segment.
   *
   * @returns {Node} The render tree for the sample code section.
   */
  renderSampleCode()
  {
    let code = "Sample code goes here.";

    return (
      <div className="highlight">
        <pre>
          <code className="language-html" data-lang="html">
            {code}
          </code>
        </pre>
      </div>
    );
  }

  /**
   * Renders the documentation.
   *
   * By default, this method will return the children of this component since
   * the other rendered elements are handled with props.
   *
   * To change this behavior, subclass this component and override this method.
   *
   * @returns {Node} The render tree for the documentation section.
   */
  renderDocumentation()
  {
    return this.props.children;
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <div className="styleguide-content usa-content">
        <header>
          <p className="site-subheading">UI components</p>
          <h1>{this.props.title}</h1>
        </header>
        <p className="usa-font-lead">
          {this.props.summary}
        </p>

        <div className="preview">
          {this.renderPreview()}
        </div>

        <Accordion type={Accordion.TYPE_BORDERED} startCollapsed>
          <AccordionItem title="Code">
            {this.renderSampleCode()}
          </AccordionItem>
        </Accordion>

        <Accordion type={Accordion.TYPE_BORDERED}>
          <AccordionItem title="Documentation" expanded>
            {this.renderDocumentation()}
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

BaseContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  summary: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
