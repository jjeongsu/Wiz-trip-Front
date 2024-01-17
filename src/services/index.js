import { combineReducers } from 'redux';
import Schedule from './schedule';
import Plan from './plan';
import User from './user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const rootReducer = combineReducers({
  Schedule, Plan, User
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['User'] // 'user' 리듀서만 persist하게 설정
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

