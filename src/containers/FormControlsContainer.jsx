import React from "react";

import BaseContainer from "./BaseContainer";

export default class FormControlsContainer extends React.Component
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

FormControlsContainer.defaultProps = {
  title: "Form controls",
  summary: "Form controls allow users to enter information into a page."
}
