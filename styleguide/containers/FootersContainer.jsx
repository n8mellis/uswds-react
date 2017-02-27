import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Footer content
 */
export default class FootersContainer extends React.Component
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

FootersContainer.defaultProps = {
  title: "Footers",
  summary: "Footers serve site visitors who arrive at the bottom of a page without finding what they want."
};
