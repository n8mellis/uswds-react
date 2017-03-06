import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Colors content
 */
export default class ColorsContainer extends React.Component
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

ColorsContainer.defaultProps = {
  title: "Colors",
  summary: "A flexible, yet distinctly American palette designed to communicate warmth and trustworthiness while meeting the highest standards of 508 color contrast requirements."
};
