import React from "react";


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

export function DocsPreview (props) {
  return (
    <div className="preview">
      {props.children}
    </div>
  );
}
DocsPreview.propTypes = {
  children: React.PropTypes.node
};
