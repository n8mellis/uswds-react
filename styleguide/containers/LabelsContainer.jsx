import React from "react";

import BaseContainer from "./BaseContainer";

export default class LabelsContainer extends React.Component
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

LabelsContainer.defaultProps = {
  title: "Labels",
  summary: "Labels draw attention to new or important content."
}
