import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Tables.
 */
export default class TablesContainer extends React.Component
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

TablesContainer.defaultProps = {
  title: "Tables",
  summary: "Tables show tabular data in columns and rows."
};
