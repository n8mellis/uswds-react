import React from "react";

import BaseContainer from "./BaseContainer";

export default class SidebarContainer extends React.Component
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

SidebarContainer.defaultProps = {
  title: "Side Navigation",
  summary: "Hierarchical, vertical navigation to place at the side of a page. Note: We're currently developing horizontal navigation and headers for the top of a page."
}
