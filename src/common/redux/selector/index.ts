import Immutable from 'immutable';
import { createSelectorCreator, createStructuredSelector, defaultMemoize } from 'reselect';

export const createSelector = (...args: any[]): any => {
  // eslint-disable-next-line prefer-spread
  return createSelectorCreator(defaultMemoize, Immutable.is).apply(null, args);
};

export const combineSelectors = (selectors, selectorCreator = createSelector) => {
  return createStructuredSelector(selectors, selectorCreator);
};
