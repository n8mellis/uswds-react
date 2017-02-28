import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Colors.
 */
export default class ColorsContainer extends React.Component
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

ColorsContainer.defaultProps = {
  title: "Colors",
  summary: "A flexible, yet distinctly American palette designed to communicate warmth and trustworthiness while meeting the highest standards of 508 color contrast requirements."
};
