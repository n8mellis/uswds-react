import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Sidebar content
 */
export default class SidebarContainer extends React.Component
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

SidebarContainer.defaultProps = {
  title: "Side Navigation",
  summary: "Hierarchical, vertical navigation to place at the side of a page. Note: We're currently developing horizontal navigation and headers for the top of a page."
};
