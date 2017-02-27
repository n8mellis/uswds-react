import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Buttons content
 */
export default class ButtonsContainer extends React.Component
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

ButtonsContainer.defaultProps = {
  title: "Buttons",
  summary: "Use buttons to signal actions."
};
