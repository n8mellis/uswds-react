import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Alerts.
 */
export default class AlertsContainer extends React.Component
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

AlertsContainer.defaultProps = {
  title: "Alerts",
  summary: "Alerts keep users informed of important and sometimes time-sensitive changes."
};
