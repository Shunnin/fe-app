import { createAsyncActionType, createAsyncActionCreator } from '../../common/redux';

import { HOME_MODULE } from './home.constant';

export const GET_CURRENT_WEATHER = createAsyncActionType('GET_CURRENT_WEATHER', HOME_MODULE);
export const GET_DAILY_FORECAST = createAsyncActionType('GET_DAILY_FORECAST', HOME_MODULE);
export const GET_LOCATION = createAsyncActionType('GET_LOCATION', HOME_MODULE);

export const getCurrentWeather = createAsyncActionCreator(GET_CURRENT_WEATHER);
export const getDailyForecast = createAsyncActionCreator(GET_DAILY_FORECAST);
export const getLocation = createAsyncActionCreator(GET_LOCATION);
