import Express from "express";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { useRouterHistory, RouterContext, match } from "react-router";

import { createMemoryHistory, useQueries } from "history";
import compression from "compression";
import Promise from "bluebird";

import configureStore from "store/configureStore";
import createRoutes from "routes/routes";

import { Provider } from "react-redux";

import Helmet from "react-helmet";

let ROOT_DIR = path.join(__dirname, "..");

/* eslint-disable no-console */

// =============================================================================
// Helper functions

/**
 * Construct the common path from a location.
 *
 * @param {Object} location A location object.
 * @returns {String}
 */
function formatPath(location)
{
  return location.pathname + location.search;
}

/**
 * TODO: Figure out exactly what this does and document it.
 *
 * @param {Object} history A history object.
 * @param {Object} location A location object.
 * @returns {Array}
 */
function getHistorySnapshot(history, location)
{
  let currentUrl = formatPath(location);
  let coalesceHistory = history.listen((newLocation) => {
    if (newLocation.action === "PUSH" || newLocation.action === "REPLACE") {
      currentUrl = formatPath(newLocation);
    }
  });
  return [
    () => currentUrl, 
    coalesceHistory
  ];
}

/**
 * Inspects the component being rendered and returns a Promise.
 *
 * Components that don't require any data to be loaded will simply return a 
 * pre-resolved Promise.  Components that _do_ require data to be loaded before 
 * they can be rendered will return an unresolved Promise and kick off the data 
 * load.
 *
 * This method relies on the fact that components that require external data 
 * to render properly define a static `fetchData` method.
 *
 * @param {Object} props The props for the current component.
 * @param {Object} store The Redux store.
 * @param {Object} history A history object.
 * @returns {Promise}
 */
function getReduxPromise(props, store, history)
{
  let { query, params } = props;
  // Obtain a reference to the Component being rendered.
  let component = props.components[props.components.length - 1];
  // If this is a wrapped component (such as one bound to Redux state), then 
  // select the underlying component.
  if (component.WrappedComponent) {
    component = component.WrappedComponent;
  }
  // If the component has a `fetchData` static attribute, then it means that it 
  // requires data to be loaded before it can be rendered.  In this case, invoke 
  // `fetchData` and return the Promise that it returns.
  if (component.fetchData) {
    return component.fetchData({ query, params, store, history });
  }
  else {
    // This component does not require data to be loaded so simply return a 
    // pre-resolved Promise so that processing can continue.
    return Promise.resolve();
  }
}

// =============================================================================
// Static asset definition

let scripts = [];
let stylesheet = "";

if (process.env.NODE_ENV === "production") {
  // TODO
}
else {
  scripts = [
    'http://localhost:3001/static/vendor.js',
    'http://localhost:3001/static/dev.js',
    'http://localhost:3001/static/app.js'
  ];
  stylesheet = "/main.css";
}


// =============================================================================
// Configuration

// Configure Express server.
let server = new Express();
// Enable HTTP compression.
server.use(compression());
// Use 3000 if the runtime environment doesn't have a PORT value.
let port = process.env.PORT || 3000;
// Set an environment variable that can be queried to check whether this is being 
// rendered server-side or not.
process.env.ON_SERVER = true;

// Use EJS to render templates.
server.set("view engine", "ejs");
// Set the path to the 'views' folder.
server.set("views", path.join(__dirname, "views"));

// =============================================================================
// Routes

// Set up static asset routes.
if (process.env.NODE_ENV === "production") {
  server.use(Express.static(path.join(ROOT_DIR, "public")));
}
else {
  server.use("/assets", Express.static(path.join(ROOT_DIR, "assets")));
  server.use(Express.static(path.join(ROOT_DIR, "dist")));
}

/**
 * Catch-all route that will handle rendering any UI views that are defined.
 *
 * Any specific routes that need to be handled differently should be defined 
 * _above_ this block.
 */
server.get("*", (request, response, next) => {
  // Set up routing and history objects.
  let history = useRouterHistory(useQueries(createMemoryHistory))();
  let store = configureStore();
  let routes = createRoutes(history);
  let location = history.createLocation(request.url);
  
  // Use the `match` function to render the correct view.
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    // If we have a `redirectLocation`, then set the redirect on the response 
    // and return.
    if (redirectLocation) {
      response.redirect(301, formatPath(redirectLocation));
      return;
    }
    // If we have an error object, set the HTTP status and message and return.
    if (error) {
      response.status(500).send(error.message);
      return;
    }
    // If our `renderProps` are `null`, then it means that there is no view 
    // available for this route, so return a 404.
    if (renderProps == null) {
      response.status(404).send("Not Found");
      return;
    }
    
    // Now that all error conditions are handled, render the appropriate view.
    let [ getCurrentUrl, coalesceHistory ] = getHistorySnapshot(history, location);
    let requestUrl = formatPath(location);
    
    // Since we don't know whether or not this request requires an API call, 
    // we will use our `getReduxPromise` helper method to inspect the request 
    // and return either an unfulfilled Promise or a pre-resolved Promise.  We 
    // can use `Promise#then` to continue our processing.
    getReduxPromise(renderProps, store, history).then(() => {
      // If the current URL is not equal to the request URL, then send a redirect.
      let currentUrl = getCurrentUrl();
      if (currentUrl !== requestUrl) {
        response.redirect(302, currentUrl);
        coalesceHistory();
        return;
      }
      
      // Prepare our current state to embed in the response.
      let reduxState = escape(JSON.stringify(store.getState()));
      // Reset our header state.
      let header = Helmet.rewind();
      // Render the component.
      let html = ReactDOMServer.renderToString(
      <Provider store={store}>
      { <RouterContext {...renderProps} /> }
      </Provider>
      );
      
      // Render the response.
      response.render("index", { header, html, scripts, reduxState, stylesheet });
      coalesceHistory();
    }).catch((error) => {
      // An error occurred during the generation of the response.
      Helmet.rewind();
      coalesceHistory();
      next(error);
    });
  });
});

// =============================================================================
// Error handling

// Fallthrough not found handler.
server.use((request, response, next) => { // eslint-disable-line no-unused-vars
  response.status(404).send("The resource you requested is not available.");
});

// Fallthrough error handler.
server.use((error, request, response, next) => { // eslint-disable-line no-unused-vars
  console.log(error.stack);
  // TODO: More robust error handling.
  response.status(500).send("An unexpected error occurred.");
});

// =============================================================================
// Start the server

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
