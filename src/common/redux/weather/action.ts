import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_ERROR,
  GET_DAILY_FORECAST_REQUEST,
  GET_DAILY_FORECAST_SUCCESS,
  GET_DAILY_FORECAST_ERROR,
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
} from './action-type';
import {
  ISearchWeatherPayload,
  ISearchWeatherErrorPayload,
  IGetCurrentWeatherSuccessPayload,
  IGetCurrentWeatherRequest,
  IGetCurrentWeatherSuccess,
  IGetCurrentWeatherError,
  IGetDailyForecastRequest,
  IGetDailyForecastSuccess,
  IGetDailyForecastSuccessPayload,
  IGetDailyForecastError,
  IGetLocationRequestPayload,
  IGetLocationSuccessPayload,
  IGetLocationRequest,
  IGetLocationSuccess,
  IGetLocationError,
} from './type';

export const getCurrentWeatherRequest = (payload: ISearchWeatherPayload): IGetCurrentWeatherRequest => ({
  type: GET_CURRENT_WEATHER_REQUEST,
  payload,
});

export const getCurrentWeatherSuccess = (payload: IGetCurrentWeatherSuccessPayload): IGetCurrentWeatherSuccess => ({
  type: GET_CURRENT_WEATHER_SUCCESS,
  payload,
});

export const getCurrentWeatherError = (payload: ISearchWeatherErrorPayload): IGetCurrentWeatherError => ({
  type: GET_CURRENT_WEATHER_ERROR,
  payload,
});

export const getDailyForecastRequest = (payload: ISearchWeatherPayload): IGetDailyForecastRequest => ({
  type: GET_DAILY_FORECAST_REQUEST,
  payload,
});

export const getDailyForecastSuccess = (payload: IGetDailyForecastSuccessPayload): IGetDailyForecastSuccess => ({
  type: GET_DAILY_FORECAST_SUCCESS,
  payload,
});

export const getDailyForecastError = (): IGetDailyForecastError => ({
  type: GET_DAILY_FORECAST_ERROR,
});

export const getLocationRequest = (payload: IGetLocationRequestPayload): IGetLocationRequest => ({
  type: GET_LOCATION_REQUEST,
  payload,
});

export const getLocationSuccess = (payload: IGetLocationSuccessPayload): IGetLocationSuccess => ({
  type: GET_LOCATION_SUCCESS,
  payload,
});

export const getLocationError = (): IGetLocationError => ({
  type: GET_LOCATION_ERROR,
});
