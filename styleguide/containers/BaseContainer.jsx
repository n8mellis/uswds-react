import React from "react";

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
        <div className="usa-grid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

BaseContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  summary: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
