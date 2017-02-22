import React from "react";

import BaseContainer from "./BaseContainer";

export default class HeadersContainer extends React.Component
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

HeadersContainer.defaultProps = {
  title: "Headers",
  summary: "Headers help users identify where they are and provide a quick, organized way to reach the main sections of a website. Our headers include branding to identify the site and horizontal navigation."
}
