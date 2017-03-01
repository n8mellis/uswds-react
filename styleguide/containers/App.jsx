import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Header from "../../lib/components/Header";
import { Sidebar, SidebarLink } from "../../lib/components/Sidebar";

/**
 * The main app component for the Styleguide.
 *
 * This component will render the main page layout items as well as any header
 * metadata supplied to the `<Helmet .../>` component.
 */
class App extends React.Component 
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <div>
        <Helmet defaultTitle="react-test"
                titleTemplate="%s - asdf"
                meta={[{ "name": "description", "content": "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express" }]}
                htmlAttributes={{"lang": "en"}} />
        
        {/* <OfficialSiteBanner /> */}
        <Header title="Draft U.S. Web Design Standards" />
        
        <div className="sub-header">
          <aside className="sidenav">
            <Sidebar>
              <SidebarLink label="Overview" to="/" onlyActiveOnIndex={true} />
              <SidebarLink label="Typography" to="/typography" />
              <SidebarLink label="Colors" to="/colors" />
              <SidebarLink label="Accessibility" to="/accessibility" />
              <SidebarLink label="Grid" to="/grid" />
              <SidebarLink label="Buttons" to="/buttons" />
              <SidebarLink label="Labels" to="/labels" />
              <SidebarLink label="Tables" to="/tables" />
              <SidebarLink label="Alerts" to="/alerts" />
              <SidebarLink label="Accordions" to="/accordions" />
              <SidebarLink label="Form Controls" to="/form-controls" >
                <SidebarLink label="Text inputs" to="/form-controls#text-input" />
                <SidebarLink label="Text area" to="/form-controls#text-area" />
                <SidebarLink label="Dropdown" to="/form-controls#dropdown" />
                <SidebarLink label="Checkboxes" to="/form-controls#checkboxes" />
                <SidebarLink label="Radio buttons" to="/form-controls#radio-buttons" />
                <SidebarLink label="Field set" to="/form-controls#field-set" />
              </SidebarLink>
              <SidebarLink label="Form Templates" to="/form-templates" />
              <SidebarLink label="Search Bar" to="/search-bar" />
              <SidebarLink label="Side Navigation" to="/sidebar" />
              <SidebarLink label="Headers" to="/headers" />
              <SidebarLink label="Footers" to="/footers" />
            </Sidebar>
          </aside>
          
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
        
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

/**
 * [mapStateToProps description]
 * @param  {object} state [description]
 * @returns {object}       [description]
 */
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  return {};
}

export default connect(mapStateToProps)(App);
