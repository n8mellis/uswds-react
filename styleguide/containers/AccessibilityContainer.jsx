import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Accessibility.
 */
export default class AccessibilityContainer extends React.Component
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

AccessibilityContainer.defaultProps = {
  title: "Accessibility",
  summary: "Accessibility tips to help you deliver delightful experiences to all users."
};
