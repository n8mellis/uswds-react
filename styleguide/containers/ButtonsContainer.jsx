import React from "react";

import BaseContainer from "./BaseContainer";

export default class ButtonsContainer extends React.Component
{
  render()
  {
    return (
      <BaseContainer {...this.props}>
        TODO
      </BaseContainer>
    )
  }
}

ButtonsContainer.defaultProps = {
  title: "Buttons",
  summary: "Use buttons to signal actions."
}
