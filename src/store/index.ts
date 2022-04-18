import { Store, IStoreParams, rootReducers } from '../common/redux';

class AppStore extends Store {
  create<IStoreParams>({ history, initialState = {} }) {
    return super.create({ history, initialState, reducers: rootReducers, sagas: {} });
  }
}

export const store = new AppStore();
