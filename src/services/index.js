import { combineReducers } from 'redux';
import Schedule from './schedule';
import Memo from './memo';
import Plan from './plan';
import User from './user';
const rootReducer = combineReducers({
  Schedule,
  Memo,
  Plan,
  User,
});

export default rootReducer;
