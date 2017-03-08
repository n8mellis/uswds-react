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



export class DocsComponent extends React.Component {
  render() {
    let title = null;

    if (props.title) {
      title = <h2>{props.title}</h2>;
    }
    return (
      <section className="docs-component">
        {title}
        <section>
          
        </section>
      </section>
    );
  }

}
DocsComponent.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node
};
