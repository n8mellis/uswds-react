import React from "react";

export default class BaseContainer extends React.Component
{
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
        
        {this.props.children}

      </div>
    );
  }
}

BaseContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  summary: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
