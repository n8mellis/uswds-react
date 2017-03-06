import React from "react";

import BaseContainer from "./BaseContainer";

/**
 * Headers content
 */
export default class HeadersContainer extends React.Component
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

HeadersContainer.defaultProps = {
  title: "Headers",
  summary: "Headers help users identify where they are and provide a quick, organized way to reach the main sections of a website. Our headers include branding to identify the site and horizontal navigation."
};
