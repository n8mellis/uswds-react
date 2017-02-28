import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Form Templates.
 */
export default class FormTemplatesContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
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
