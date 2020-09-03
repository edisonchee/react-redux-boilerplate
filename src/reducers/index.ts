import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import nameReducer from './nameReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  name: nameReducer
});

export default rootReducer;