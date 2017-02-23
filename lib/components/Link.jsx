import React from "react";
import { Link as RRLink } from "react-router";

/**
 * Represents a generic link element.
 *
 * This class is a wrapper around the React Router Link class and accepts any 
 * props supported by that class.
 *
 * If no `activeClassName` is defined, this class will set it to the default 
 * value of "usa-current" per the U.S. Web Design Standards.
 */
export default class Link extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
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
