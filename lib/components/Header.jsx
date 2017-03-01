import React from "react";

import OfficialSiteBanner from "./OfficialSiteBanner";
// import NavigationBar from "./NavigationBar";
// import SearchField from "./SearchField";

/**
 * The site header containing the official site banner, logo and nav.
 *
 * TODO: Add support for Basic and Extended headers.
 * TODO: Add support for embedded NavigationBars
 */
export default class Header extends React.Component
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
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <header className="usa-header usa-header-basic" role="banner">
          <OfficialSiteBanner />
          <div className="usa-nav-container">
            <div className="usa-navbar">
              {/* <button className="usa-menu-btn">Menu</button> */}
              <div className="usa-logo" id="logo">
                <em className="usa-logo-text">
                  <a href="#" accessKey="1" title="Home" aria-label="Home">
                    {this.props.title}
                  </a>
                </em>
              </div>
            </div>
            {/* <NavigationBar>
              
              <SearchField size={SearchField.SIZE_SMALL} />
            </NavigationBar> */}
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};
