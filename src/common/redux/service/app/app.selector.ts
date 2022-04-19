import { get } from 'lodash-es';

import { createSelector, combineSelectors } from '../../selector';

import { APP_MODULE } from './app.constant';

interface IState {
  [APP_MODULE]?: {
    tempUnit: string;
  };
}

const appStateSelector = (state: IState) => state[APP_MODULE];

export const tempUnitSelector = createSelector(appStateSelector, moduleState => {
  return get(moduleState, 'tempUnit');
});

export const appSelectors = combineSelectors({
  tempUnit: tempUnitSelector,
});
