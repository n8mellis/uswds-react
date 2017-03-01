import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Form Templates content
 */
export default class FormTemplatesContainer extends React.Component
{
  /**
   * Renders the node
   * @returns {node} the rendered DOM node
   */
  render()
  {
    return (
      <BaseContainer {...this.props}>
        TODO
      </BaseContainer>
    );
  }
}

FormTemplatesContainer.defaultProps = {
  title: "Form templates",
  summary: "Patterns for some of the most commonly used forms on government websites."
};
