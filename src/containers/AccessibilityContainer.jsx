import React from "react";

import BaseContainer from "./BaseContainer";

export default class AccessibilityContainer extends React.Component
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

AccessibilityContainer.defaultProps = {
  title: "Accessibility",
  summary: "Accessibility tips to help you deliver delightful experiences to all users."
}
