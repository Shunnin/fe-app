import { createSelector } from 'reselect';

import { AppState } from '../reducer';

const getLoading = (state: AppState) => state.weather.loading;

const getWeather = (state: AppState) => state.weather.weather;

const getDailyForecast = (state: AppState) => state.weather.dailyForecast;

const getLocations = (state: AppState) => state.weather.locations;

const getErrors = (state: AppState) => state.weather.errors;

export const getWeatherSelector = createSelector(getWeather, weather => weather);

export const getDailyForecastSelector = createSelector(getDailyForecast, dailyForecast => dailyForecast);

export const getLocationsSelector = createSelector(getLocations, (locations: string[]) => locations);

export const getLoadingSelector = createSelector(getLoading, loading => loading);

export const getErrorSelector = createSelector(getErrors, errors => errors);
