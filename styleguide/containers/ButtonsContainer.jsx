import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Buttons.
 */
export default class ButtonsContainer extends React.Component
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

ButtonsContainer.defaultProps = {
  title: "Buttons",
  summary: "Use buttons to signal actions."
};
