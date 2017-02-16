import React from "react";

import OfficialSiteBanner from "./OfficialSiteBanner";
import NavigationBar from "./NavigationBar";
import SearchField from "./fields/SearchField";

export default class Header extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
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
                    Department of
                    <br/>
                    Web Standards
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
    )
  }
}
