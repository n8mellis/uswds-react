import React from "react";

import Button from "./Button";

export default class AccordionButton extends React.Component
{
  render()
  {
    return (
      <button className="usa-accordion-button">
        <span>
          {this.props.children}
        </span>
      </button>
    )
  }
}
