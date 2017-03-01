import React from 'react';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
// import configureStore from 'store/configureStore';

import App from 'containers/App';
import OverviewContainer from "containers/OverviewContainer";
import TypographyContainer from "containers/TypographyContainer";
import ColorsContainer from "containers/ColorsContainer";
import AccessibilityContainer from "containers/AccessibilityContainer";
import GridContainer from "containers/GridContainer";
import ButtonsContainer from "containers/ButtonsContainer";
import LabelsContainer from "containers/LabelsContainer";
import TablesContainer from "containers/TablesContainer";
import AlertsContainer from "containers/AlertsContainer";
import AccordionsContainer from "containers/AccordionsContainer";
import FormControlsContainer from "containers/FormControlsContainer";
import FormTemplatesContainer from "containers/FormTemplatesContainer";
import SearchBarContainer from "containers/SearchBarContainer";
import SidebarContainer from "containers/SidebarContainer";
import HeadersContainer from "containers/HeadersContainer";
import FootersContainer from "containers/FootersContainer";

/**
 * resolve internal page links 
 */
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

/**
 * Application routes
 * @param {unknown} history [description]
 * @returns {node} 
 */
export default function AppRouter(history) {
  return (
    <Router history={history} onUpdate={hashLinkScroll}>
      <Route path="/" component={App}>
        <Route path="typography" component={TypographyContainer} />
        <Route path="colors" component={ColorsContainer} />
        <Route path="accessibility" component={AccessibilityContainer} />
        <Route path="grid" component={GridContainer} />
        <Route path="buttons" component={ButtonsContainer} />
        <Route path="labels" component={LabelsContainer} />
        <Route path="tables" component={TablesContainer} />
        <Route path="alerts" component={AlertsContainer} />
        <Route path="accordions" component={AccordionsContainer} />
        <Route path="form-controls" component={FormControlsContainer} />
        <Route path="form-templates" component={FormTemplatesContainer} />
        <Route path="search-bar" component={SearchBarContainer} />
        <Route path="sidebar" component={SidebarContainer} />
        <Route path="headers" component={HeadersContainer} />
        <Route path="footers" component={FootersContainer} />
        <IndexRoute component={OverviewContainer} />
      </Route>
    </Router>
  );
}
