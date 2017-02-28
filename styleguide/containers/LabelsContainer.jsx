import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Labels.
 */
export default class LabelsContainer extends React.Component
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

LabelsContainer.defaultProps = {
  title: "Labels",
  summary: "Labels draw attention to new or important content."
};
