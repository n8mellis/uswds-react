import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Form Controls.
 */
export default class FormControlsContainer extends React.Component
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

FormControlsContainer.defaultProps = {
  title: "Form controls",
  summary: "Form controls allow users to enter information into a page."
};
