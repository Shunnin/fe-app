// //@ts-ignore
// import Immutable from 'immutable';
// import { forIn } from 'lodash-es';
// import { createSelectorCreator, createStructuredSelector, defaultMemoize } from 'reselect';

// export const createSelector = (...args) => {
//   return createSelectorCreator(defaultMemoize, Immutable.is)(...args);
// };

// export const combineSelectors = (selectors, selectorCreator = createSelector) => {
//   return createStructuredSelector(selectors, selectorCreator);
// };

// export const generateSelectors = (moduleSelector, props) => {
//   let selectors = {};

//   forIn(props, (path: string | string[], key) => {
//     if (Array.isArray(path)) {
//       selectors[key] = createSelector(moduleSelector, state => {
//         return state?.getIn(path);
//       });
//     } else {
//       selectors[key] = createSelector(moduleSelector, state => {
//         return state?.get(path);
//       });
//     }
//   });

//   return selectors;
// };
