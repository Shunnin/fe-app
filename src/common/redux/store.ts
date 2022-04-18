import { History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducer';

export interface IStoreParams {
  history: History;
  reducers?: any;
  sagas?: any;
  initialState?: any;
}

export class Store {
  private store: any;
  private static instance: any;

  constructor() {
    if (!Store.instance) {
      Store.instance = this;
    }

    return Store.instance;
  }

  config({ rootReducer, sagaMiddleware, initialState, history }) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const middlewares = [reduxRouterMiddleware, sagaMiddleware];
    const finalCreateStore = applyMiddleware(...middlewares)(createStore);

    return finalCreateStore(rootReducer, initialState);
  }

  create<IStoreParams>({ reducers, sagas, history, initialState = {} }) {
    const sagaMiddleware = createSagaMiddleware();
    const rootReducer = createReducer(reducers);

    this.store = this.config({ rootReducer, sagaMiddleware, initialState, history });
    this.store.reducers = reducers;
    this.store.history = history;
    this.store.sagas = new Map();
    this.store.runSaga = sagaMiddleware.run;

    return this.store;
  }

  injectReducer(name, reducer, configuredStore = this.store) {
    if (configuredStore && name && reducer) {
      configuredStore.reducers[name] = reducer;
      configuredStore.replaceReducer(createReducer(configuredStore.reducers));
    }
  }

  injectSaga(name, saga, configuredStore = this.store) {
    const isInjected = configuredStore.sagas.has(name);

    if (saga && configuredStore && !isInjected) {
      const task = configuredStore.runSaga(saga);

      configuredStore.sagas.set(name, task);
    }
  }

  dispatch(action) {
    this.store.dispatch(action);
  }
}
