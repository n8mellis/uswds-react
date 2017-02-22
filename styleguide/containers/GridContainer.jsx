import React from "react";

import BaseContainer from "./BaseContainer";

export default class GridContainer extends React.Component
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

GridContainer.defaultProps = {
  title: "Grids",
  summary: "This 12-column, responsive grid provides structure for website content."
}
