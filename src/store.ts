import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const defaultState = {
  name: 'Stranger'
};

const routerMiddleware = createRouterMiddleware(history)

export const store = createStore(
  rootReducer(history),
  defaultState,
  compose(
    applyMiddleware(
      routerMiddleware
    )
  )
);