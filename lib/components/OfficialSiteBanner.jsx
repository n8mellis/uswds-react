import React from "react";

/**
 * Renders the standard official site banner indicating that this site is an 
 * official government site.
 *
 * This component is usually rendered in the common {@link Header}. You should 
 * only need to add this manually if you are implementing your own header. 
 * In that case, this should be the element that is at the very top of the 
 * window.
 *
 * For more information, please consult the 
 * [U.S. Web Design Standards](https://standards.usa.gov).
 */
export default class OfficialSiteBanner extends React.Component
{
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props)
  {
    super(props);
    this.state = {
      contentVisible: false
    };
  }
  
  /**
   * Toggles the visiblity of the content section.
   */
  toggleDetails()
  {
    this.setState({ contentVisible: !this.state.contentVisible });
  }
  
  /**
   * Renders the content of the accordion that expands when the user clicks 
   * on the "Here's how you know" link.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderContent()
  {
    if (!this.state.contentVisible) {
      return "";
    }
    return (
      <div className="usa-banner-content usa-grid" id="gov-banner">
        <div className="usa-banner-guidance-gov usa-width-one-half">
          <img className="usa-banner-icon usa-media_block-img" src="/assets/images/icon-dot-gov.svg" alt="Dot gov" />
          <div className="usa-media_block-body">
            <p>
              <strong>The .gov means it's official.</strong>
              <br/>
              Federal government websites always use a .gov or .mil domain. 
              Before sharing sensitive information online, make sure you’re 
              on a .gov or .mil site by inspecting your browser’s address 
              (or “location”) bar.
            </p>
          </div>
        </div>
        <div className="usa-banner-guidance-ssl usa-width-one-half">
          <img className="usa-banner-icon usa-media_block-img" src="/assets/images/icon-https.svg" alt="SSL" />
          <div className="usa-media_block-body">
            <p>
              This site is also protected by an SSL (Secure Sockets Layer) 
              certificate that’s been signed by the U.S. government. 
              The <strong>https://</strong> means all transmitted data is 
              encrypted  — in other words, any information or browsing 
              history that you provide is transmitted securely.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner-header">
            <div className="usa-grid usa-banner-inner">
              <img src="/assets/images/favicons/favicon-57.png" alt="U.S. Flag" />
              <p>An official website of the United States government</p>
              <button className="usa-accordion-button usa-banner-button" aria-expanded="false" aria-controls="gov-banner" onClick={this.toggleDetails.bind(this)}>
                <span className="usa-banner-button-text">
                  Here's how you know
                </span>
              </button>
            </div>
          </header>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
