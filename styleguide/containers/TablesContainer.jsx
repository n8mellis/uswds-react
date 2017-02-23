import React from "react";

import BaseContainer from "./BaseContainer";

export default class TablesContainer extends React.Component
{
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
