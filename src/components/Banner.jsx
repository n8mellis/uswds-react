import React from "react";

export default class Banner extends React.Component
{
  render()
  {
    return (
      <header className="usa-banner-header">
        <div className="usa-grid usa-banner-inner">
          {this.props.children}
        </div>
      </header>
    )
  }
}
