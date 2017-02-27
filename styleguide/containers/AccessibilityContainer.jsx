import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Accessibility content
 */
export default class AccessibilityContainer extends React.Component
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

AccessibilityContainer.defaultProps = {
  title: "Accessibility",
  summary: "Accessibility tips to help you deliver delightful experiences to all users."
};
