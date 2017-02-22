import React from "react";

import BaseContainer from "./BaseContainer";

export default class AlertsContainer extends React.Component
{
  render()
  {
    return (
      <BaseContainer {...this.props}>
        TODO
      </BaseContainer>
    )
  }
}

AlertsContainer.defaultProps = {
  title: "Alerts",
  summary: "Alerts keep users informed of important and sometimes time-sensitive changes."
}
