import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_ERROR,
  GET_DAILY_FORECAST_REQUEST,
  GET_DAILY_FORECAST_SUCCESS,
  GET_DAILY_FORECAST_ERROR,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
} from './home.action-type';

import { WeatherActions, IWeatherState } from './home.type';

const initialState: IWeatherState = {
  loading: false,
  weather: {},
  dailyForecast: {},
  locations: [],
  errors: null,
};

export const HOME_MODULE = 'homeModule';

export const homeReducer = (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
        errors: null,
      };

    case GET_CURRENT_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        weather: {},
        dailyForecast: {},
        errors: action.payload,
      };

    case GET_DAILY_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_DAILY_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        dailyForecast: action.payload,
      };

    case GET_DAILY_FORECAST_ERROR:
      return {
        ...state,
        loading: false,
        dailyForecast: [],
      };

    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        locations: action.payload,
      };

    case GET_LOCATION_ERROR:
      return {
        ...state,
        locations: [],
      };

    default:
      return {
        ...state,
      };
  }
};
