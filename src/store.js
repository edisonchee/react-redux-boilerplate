import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

const defaultState = {
  name: 'Stranger'
};

export const history = createHistory();

export const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  compose(
    applyMiddleware(routerMiddleware(history))
  )
);