import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import apiMiddleware from '../middleware/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root';


const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true // eslint-disable-line no-unused-vars
});

let middlewares = [
  thunkMiddleware // ,
  // apiMiddleware
];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);

/**
 * [configureStore description]
 * @param {object} initialState the initial state
 * @returns {object} the store
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/root', () => {
      const nextRootReducer = require('../reducers/root');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
