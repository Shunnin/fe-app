import { combineReducers } from 'redux';

import { APP_MODULE, appReducer } from '../service/app/';

export type IDefaultAction = {
  type: string;
  payload?: any;
  response?: any;
  error?: any;
};

export const createReducer = (reducers: any) => {
  return combineReducers({
    ...reducers,
  });
};

export const rootReducers = {
  [APP_MODULE]: appReducer,
};
