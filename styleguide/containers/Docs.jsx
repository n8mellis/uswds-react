import React from "react";

/**
 * This is the wrapper for the page
 * @param {object} props The props
 * @returns {node} The node
 */
export function DocsPage (props) {
  return (
    <div className="styleguide-content usa-content">
      <header>
        <p className="site-subheading">UI components</p>
        <h1>{props.title}</h1>
      </header>

      {props.children}

    </div>
  );
}
DocsPage.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};


/**
 * This is the wrapper for a component or component group
 * @param {object} props The props
 * @returns {node} The node
 */
export function DocsComponent (props) {
  let title = null;

  if (props.title) {
    title = <h2 className="usa-heading">{props.title}</h2>;
  }
  return (
    <section id={props.id} className="docs-component">
      {title}
      {props.children}
    </section>
  );
}
DocsComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};


/**
 * This is the wrapper for a section
 * @param {object} props The props
 * @returns {node} The node
 */
export function DocsSection (props) {
  let title = null;

  if (props.title) {
    title = <h3>{props.title}</h3>;
  }
  return (
    <section className="docs-section">
      {title}
      {props.children}
    </section>
  );
}
DocsSection.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node
};


/**
 * This is the wrapper for usage examples
 * @param {object} props The props
 * @returns {node} The node
 */
export function DocsExample (props) {
  return (
    <div className="example">
      {props.children}
    </div>
  );
}
DocsExample.propTypes = {
  children: React.PropTypes.node
};


/**
 * This is the wrapper for a rendered preview inside an example usage
 * @param {object} props The props
 * @returns {node} The node
 */
export function DocsPreview (props) {
  return (
    <div className={'preview ' + props.className}>
      {props.children}
    </div>
  );
}
DocsPreview.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};
