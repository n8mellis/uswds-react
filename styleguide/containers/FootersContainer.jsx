import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Footers.
 */
export default class FootersContainer extends React.Component
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

FootersContainer.defaultProps = {
  title: "Footers",
  summary: "Footers serve site visitors who arrive at the bottom of a page without finding what they want."
};
