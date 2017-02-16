import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import OfficialSiteBanner from "../components/OfficialSiteBanner";
import Header from "../components/Header";
import { Sidebar, SidebarLink } from "../components/Sidebar";

class App extends React.Component 
{
  render() 
  {
    return (
      <div>
        <Helmet defaultTitle="react-test"
                titleTemplate="%s - asdf"
                meta={[{ "name": "description", "content": "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express" }]}
                htmlAttributes={{"lang": "en"}} />
        
        <OfficialSiteBanner />
        
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
            <SidebarLink label="Form Controls" to="/form-controls" />
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
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
