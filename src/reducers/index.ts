import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import nameReducer from './nameReducer';

const rootReducer = history => combineReducers({
  router: createRouterReducer(history),
  name: nameReducer
});

export default rootReducer;