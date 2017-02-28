import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Grids.
 */
export default class GridContainer extends React.Component
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

GridContainer.defaultProps = {
  title: "Grids",
  summary: "This 12-column, responsive grid provides structure for website content."
};
