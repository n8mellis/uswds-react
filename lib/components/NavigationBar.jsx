import React from "react";

/**
 * Provides a standard Navigation Bar.
 *
 * Children of the Navigation Bar can be one of the following:
 *
 *   - MenuItem
 *   - Link
 *   - SearchField
 *
 * For more information on when to use each of the different sizes, please 
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 */
export default class NavigationBar extends React.Component
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
      <nav role="navigation" className="usa-nav">
        <div className="usa-nav-inner">
          <button className="usa-nav-close">
            <img src="/assets/images/close.svg" alt="close" />
          </button>
          {this.props.children}
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
