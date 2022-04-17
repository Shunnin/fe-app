import { combineReducers } from 'redux';

import appReducer from '../app/reducer';
import weatherReducer from '../weather/reducer';

// export const createReducer = (reducers: any) => {
//   return combineReducers({
//     ...reducers,
//   });
// };

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
