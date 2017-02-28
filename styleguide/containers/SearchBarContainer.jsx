import React from "react";

import BaseContainer from "./BaseContainer";
import SearchField from "../../lib/components/SearchField";

/**
 * Displays the Styleguide content for Search Bars.
 */
export default class SearchBarContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <BaseContainer {...this.props}>
        <div className="usa-width-one-half">
          <h6>Search Big</h6>
          <SearchField size={SearchField.SIZE_BIG} />
          {/* <SearchField /> */}
          <h6>Search Medium</h6>
          <SearchField size={SearchField.SIZE_MEDIUM} />
          <h6>Search Small</h6>
          <SearchField size={SearchField.SIZE_SMALL} />
        </div>
      </BaseContainer>
    );
  }
}

SearchBarContainer.defaultProps = {
  title: "Search Bar",
  summary: "A block that allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation."
};
