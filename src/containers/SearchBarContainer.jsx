import React from "react";

import SearchField from "../../lib/components/SearchField";

export default class SearchBarContainer extends React.Component
{
  render()
  {
    return (
      <div>
        Search Bar
        <br/>
        <hr/>
        <br/>
        <div className="usa-grid">
          <div className="usa-width-one-half">
            <SearchField size={SearchField.SIZE_BIG} />
            {/* <SearchField /> */}
            <SearchField size={SearchField.SIZE_MEDIUM} />
            <SearchField size={SearchField.SIZE_SMALL} />
          </div>
        </div>
      </div>
    )
  }
}
