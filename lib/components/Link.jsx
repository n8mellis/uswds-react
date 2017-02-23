import React from "react";
import { Link as RRLink } from "react-router";

export default class Link extends React.Component
{
  render()
  {
    let props = Object.assign({}, this.props);
    if (!props.activeClassName) {
      props.activeClassName = "usa-current";
    }
    return (
      <RRLink {...props} />
    );
  }
}
