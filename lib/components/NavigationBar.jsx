import React from "react";

import Link from "./Link";

/**
 * Provides a standard Navigation Bar.
 *
 * Children of the Navigation Bar can be one of the following:
 *
 *   - NavigationLink
 *
 * For more information on when to use each of the different sizes, please 
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 */
export class NavigationBar extends React.Component
{
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props)
  {
    super(props);
  }
  
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <nav role="navigation" className={`usa-nav`}>
        <div className="">
          <button className="usa-nav-close">
            <img src="/assets/images/close.svg" alt="close" />
          </button>
          <ul className="usa-nav-primary">
            {this.props.children}
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationBar.LAYOUT_BASIC    = "usa-search-big";
NavigationBar.LAYOUT_EXTENDED = "usa-search-medium";

NavigationBar.propTypes = {
  layout: React.PropTypes.oneOf([ 
    NavigationBar.LAYOUT_BASIC, 
    NavigationBar.LAYOUT_EXTENDED ]),
  children: React.PropTypes.node
};

NavigationBar.defaultProps = {
  layout: NavigationBar.LAYOUT_BASIC
};


// =============================================================================


/**
 * Returns a link suitable for displaying in the {@link NavigationBar} component.
 *
 * This class can optionally take children that are also {@link NavigationLink}
 * components.  This allows for nested links in the sidebar.
 *
 * For more information on how to use the {@link NavigationBar} and
 * {@link NavigationLink}s, please see the documentation for
 * {@link NavigationBar}.
 */
export class NavigationLink extends React.Component
{
  /**
   * Renders the children of this component.
   *
   * It's possible that this link doesn't have any children, in which case,
   * it returns an empty string. Otherwise, it return a `ul` element with all
   * the children.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderChildren()
  {
    let children = "";
    if (React.Children.count(this.props.children) > 0) {
      children = (
        <ul className="">
          {this.props.children}
        </ul>
      );
    }
    return children;
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <li>
        <Link {...this.props}>{this.props.label}</Link>
        {this.renderChildren()}
      </li>
    );
  }
}

NavigationLink.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
