import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import App from 'containers/App'
import OverviewContainer from "containers/OverviewContainer";
import TypographyContainer from "containers/TypographyContainer";
import AccordionsContainer from "containers/AccordionsContainer";
import SearchBarContainer from "containers/SearchBarContainer";
import SidebarContainer from "containers/SidebarContainer";

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="typography" component={TypographyContainer} />
        <Route path="colors" component={OverviewContainer} />
        <Route path="accessibility" component={OverviewContainer} />
        <Route path="grid" component={OverviewContainer} />
        <Route path="buttons" component={OverviewContainer} />
        <Route path="labels" component={OverviewContainer} />
        <Route path="tables" component={OverviewContainer} />
        <Route path="alerts" component={OverviewContainer} />
        <Route path="accordions" component={AccordionsContainer} />
        <Route path="form-controls" component={OverviewContainer} />
        <Route path="form-templates" component={OverviewContainer} />
        <Route path="search-bar" component={SearchBarContainer} />
        <Route path="sidebar" component={SidebarContainer} />
        <Route path="headers" component={OverviewContainer} />
        <Route path="footers" component={OverviewContainer} />
        <IndexRoute component={OverviewContainer} />
      </Route>
    </Router>
  )
}
