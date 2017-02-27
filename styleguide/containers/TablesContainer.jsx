import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Tables content
 */
export default class TablesContainer extends React.Component
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

TablesContainer.defaultProps = {
  title: "Tables",
  summary: "Tables show tabular data in columns and rows."
};
