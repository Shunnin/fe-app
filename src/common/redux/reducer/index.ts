import { combineReducers } from 'redux';

import { APP_MODULE, appReducer } from '../service/app/app.reducer';

export const createReducer = (reducers: any) => {
  return combineReducers({
    ...reducers,
  });
};

export const rootReducers = {
  [APP_MODULE]: appReducer,
};
