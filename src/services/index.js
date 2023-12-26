import { combineReducers } from 'redux';
import Schedule from './schedule'
import Memo from './memo';
const rootReducer = combineReducers({
    Schedule, Memo
});

export default rootReducer;