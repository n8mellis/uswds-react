import React from "react";

import BaseContainer from "./BaseContainer";

export default class FootersContainer extends React.Component
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

FootersContainer.defaultProps = {
  title: "Footers",
  summary: "Footers serve site visitors who arrive at the bottom of a page without finding what they want."
}
