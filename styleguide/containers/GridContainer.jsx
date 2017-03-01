import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Grid content
 */
export default class GridContainer extends React.Component
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

GridContainer.defaultProps = {
  title: "Grids",
  summary: "This 12-column, responsive grid provides structure for website content."
};
