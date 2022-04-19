import { get } from 'lodash-es';

import { createSelector, combineSelectors } from '../../common/redux';
import { tempUnitSelector } from '../../common/redux/service/app/';

import { HOME_MODULE } from './home.constant';

interface IState {
  [HOME_MODULE]?: {
    loading: boolean;
    weather: any;
    dailyForecast: any;
    locations: string[];
    error: string;
  };
}

const homeStateSelector = (state: IState) => state[HOME_MODULE];

export const weatherSelector = createSelector(homeStateSelector, moduleState => {
  return get(moduleState, 'weather');
});

export const dailyForecastSelector = createSelector(homeStateSelector, moduleState => {
  return get(moduleState, 'dailyForecast');
});

export const locationsSelector = createSelector(homeStateSelector, moduleState => {
  return get(moduleState, 'locations');
});

export const loadingSelector = createSelector(homeStateSelector, moduleState => {
  return get(moduleState, 'loading');
});

export const errorSelector = createSelector(homeStateSelector, moduleState => {
  return get(moduleState, 'error');
});

export const homeSelectors = combineSelectors({
  weather: weatherSelector,
  dailyForecast: dailyForecastSelector,
  locations: locationsSelector,
  loading: loadingSelector,
  error: errorSelector,
  degreeType: tempUnitSelector,
});
