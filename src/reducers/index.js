import { combineReducers } from 'redux';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  name: nameReducer
});

export default rootReducer;