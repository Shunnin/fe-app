import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import { rootSaga } from './middleware';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import { routerMiddleware } from 'connected-react-router/immutable';

// import { createReducer } from './reducer';
// import { createSaga } from './middleware';

// export class Store {
// 	private store: any;

//   // constructor() {
//   //   if (!Store.instance) {
//   //     Store.instance = this;
//   //   }

//   //   return Store.instance;
//   // }

//   /**
//    * Config store with middlewares/logger/devtools
// 	 *
//    * @param  {Object} settings         The store options
//    *                  - rootReducer    The root reducer
//    *                  - sagaMiddleware The saga middleware
//    *                  - initialState   Initial state
//    *                  - history        Browser history
//    * @return {Object}                  The Redux store
//    */
//   config(settings) {
//     const { rootReducer, sagaMiddleware, initialState, history } = settings;
//     const reduxRouterMiddleware = routerMiddleware(history);
//     const middlewares = [reduxRouterMiddleware, sagaMiddleware];
//     const finalCreateStore = applyMiddleware(...middlewares)(createStore);

//     return finalCreateStore(rootReducer, initialState);
//   }

//   /**
//    * Create store
//    *
//    * @param  {Object} settings         The store settings
//    *                  - reducers       Reducers
//    *                  - sagas          Epics
//    *                  - initialState   Initial state
//    *                  - history        Browser history
//    *                  - options        Additional options
//    *                    + dependencies The saga dependencies
//    * @return {Object}                  Application store
//    */
//   create(settings) {
//     const { reducers, initialState, history, sagas, sagaDependencies } = settings;
//     const rootReducer = createReducer(reducers, history);
// 		const sagaMiddleware = createSagaMiddleware();
//     // const { rootSaga, sagaMiddleware } = createSaga(sagas, sagaDependencies);

//     this.store = this.config({ rootReducer, sagaMiddleware, initialState, history });
//     this.store.reducers = reducers || {};
//     this.store.history = history;
//     // this.store.sagas = {};

//     // sagaMiddleware.run(rootSaga);

//     return this.store;
//   }

//   /**
//    * Dynamic inject async reducer to store
//    *
//    * @param {String} name             Reducer name
//    * @param {Function} reducer        Reducer
//    * @param {Object} configuredStore  Store. Defaults to current store
//    * @return {Void}
//    */
//   injectReducer(name, reducer, configuredStore = this.store) {
//     if (configuredStore && name && reducer) {
//       configuredStore.reducers[name] = reducer;
//       configuredStore.replaceReducer(createReducer(configuredStore.reducers, configuredStore.history));
//     }
//   }

//   /**
//    * Dispatch the given action to current redux store.
//    * Before calling this, make sure redux store have been created by
//    * {@link create}
//    *
//    * @param {Object} action Standard redux action
//    * @return {Void}
//    */
//   dispatch(action) {
//     this.store.dispatch(action);
//   }
// }
