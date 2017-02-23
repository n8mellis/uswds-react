import React from "react";

import Link from "./Link";

export class Sidebar extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return (
      <ul className="usa-sidenav-list">
        {this.props.children}
      </ul>
    );
  }
}

Sidebar.propTypes = {
  children: React.PropTypes.node
};


// =============================================================================


export class SidebarLink extends React.Component
{
  renderChildren()
  {
    let children = "";
    if (React.Children.count(this.props.children) > 0) {
      children = (
        <ul className="usa-sidenav-sub_list">
          {this.props.children}
        </ul>
      );
    }
    return children;
  }
  
  render()
  {
    return (
      <li>
        <Link {...this.props}>{this.props.label}</Link>
        {this.renderChildren()}
      </li>
    );
  }
}

SidebarLink.propTypes = {
  label: React.PropTypes.string.isRequired, 
  children: React.PropTypes.node
};
