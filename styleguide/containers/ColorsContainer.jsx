import React from "react";

import BaseContainer from "./BaseContainer";

export default class ColorsContainer extends React.Component
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

ColorsContainer.defaultProps = {
  title: "Colors",
  summary: "A flexible, yet distinctly American palette designed to communicate warmth and trustworthiness while meeting the highest standards of 508 color contrast requirements."
}
