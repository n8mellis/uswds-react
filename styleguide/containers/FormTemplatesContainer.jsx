import React from "react";

import BaseContainer from "./BaseContainer";

export default class FormTemplatesContainer extends React.Component
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

FormTemplatesContainer.defaultProps = {
  title: "Form templates",
  summary: "Patterns for some of the most commonly used forms on government websites."
}
