import { createSelector } from 'reselect';

import { HOME_MODULE } from './home.reducer';

interface IState {
  homeModule?: {
    loading: boolean;
    weather: any;
    dailyForecast: any;
    locations: string[];
    errors: string;
  };
}

const getLoading = (state: IState) => state[HOME_MODULE].loading;

const getWeather = (state: IState) => state[HOME_MODULE].weather;

const getDailyForecast = (state: IState) => state[HOME_MODULE].dailyForecast;

const getLocations = (state: IState) => state[HOME_MODULE].locations;

const getErrors = (state: IState) => state[HOME_MODULE].errors;

export const getWeatherSelector = createSelector(getWeather, weather => weather);

export const getDailyForecastSelector = createSelector(getDailyForecast, dailyForecast => dailyForecast);

export const getLocationsSelector = createSelector(getLocations, (locations: string[]) => locations);

export const getLoadingSelector = createSelector(getLoading, loading => loading);

export const getErrorSelector = createSelector(getErrors, errors => errors);

// import { createSelector, combineSelectors } from '../../common/redux';

// const homeStateSelector = state => state.get(HOME_MODULE);

// export const weatherSelector = createSelector(homeStateSelector, moduleState => {
//   return moduleState.get('weather');
// });

// export const dailyForecastSelector = createSelector(homeStateSelector, moduleState => {
//   return moduleState.get('dailyForecast');
// });

// export const locationsSelector = createSelector(homeStateSelector, moduleState => {
//   return moduleState.get('locations');
// });

// export const loadingSelector = createSelector(homeStateSelector, moduleState => {
//   return moduleState.get('loading');
// });

// export const errorsSelector = createSelector(homeStateSelector, moduleState => {
//   return moduleState.get('errors');
// });

// export const homeSelector = combineSelectors({
//   weather: getWeatherSelector,
//   dailyForecast: getDailyForecastSelector,
//   locations: getLocationsSelector,
//   loading: getLoadingSelector,
//   errors: getErrorSelector,
// });
