import { Store, IStoreParams, rootReducers } from '../common/redux';

class AppStore extends Store {
  create({ history, initialState = {} }: IStoreParams) {
    return super.create({ history, initialState, reducers: rootReducers, sagas: {} });
  }
}

export const store = new AppStore();
