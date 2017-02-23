import React from "react";

/**
 * Provides a standard Search Field.
 *
 * The search field can be one of three sizes by setting the `size` prop. The 
 * valid values for the `size` prop are as follows:
 *
 *   - SearchField.SIZE_BIG
 *   - SearchField.SIZE_MEDIUM (default)
 *   - SearchField.SIZE_SMALL
 *
 * For more information on when to use each of the different sizes, please 
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 */
export default class SearchField extends React.Component
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
    let buttonContents;
    if (this.props.size === SearchField.SIZE_SMALL) {
      buttonContents = (<span className="usa-sr-only">Search</span>);
    }
    else {
      buttonContents = (<span className="usa-search-submit-text">Search</span>);
    }
    
    return (
      <form className={"usa-search " + this.props.size}>
        <div role="search">
          <label>
            <span className="usa-sr-only">Search</span>
            <input type="search" name="search" />
          </label>
          <button type="submit">
            {buttonContents}
          </button>
        </div>
      </form>
    );
  }
}

SearchField.SIZE_BIG    = "usa-search-big";
SearchField.SIZE_MEDIUM = "usa-search-medium";
SearchField.SIZE_SMALL  = "usa-search-small";

SearchField.propTypes = {
  size: React.PropTypes.oneOf([ 
    SearchField.SIZE_BIG, 
    SearchField.SIZE_MEDIUM, 
    SearchField.SIZE_SMALL ])
};

SearchField.defaultProps = {
  size: SearchField.SIZE_MEDIUM
};
