import React from "react";

import SearchField from "../../lib/components/SearchField";

export default class SearchBarContainer extends React.Component
{
  render()
  {
    return (
      <div className="styleguide-content usa-content">
        <header>
          <p className="site-subheading">UI components</p>
          <h1>Search Bar</h1>
        </header>
        <p className="usa-font-lead">
          A block that allows users to search for specific content if they know 
          what search terms to use or can’t find desired content in the main 
          navigation.
        </p>
        <div className="usa-grid">
          <div className="usa-width-one-half">
            <h6>Search Big</h6>
            <SearchField size={SearchField.SIZE_BIG} />
            {/* <SearchField /> */}
            <h6>Search Medium</h6>
            <SearchField size={SearchField.SIZE_MEDIUM} />
            <h6>Search Small</h6>
            <SearchField size={SearchField.SIZE_SMALL} />
          </div>
        </div>
      </div>
    )
  }
}
