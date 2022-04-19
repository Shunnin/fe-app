import { IDefaultAction } from '../../common/redux';

import { GET_CURRENT_WEATHER, GET_DAILY_FORECAST, GET_LOCATION } from './home.action';

export const HOME_MODULE = 'homeModule';

export interface IWeatherState {
  loading: boolean;
  weather: any;
  dailyForecast: any;
  locations: any[];
  error: any;
}

// #region IPayload
export interface ISearchWeatherPayload {
  q?: string;
}

// #region IPayload
export interface ISearchWeatherErrorPayload {
  error: any;
}

export interface IGetCurrentWeatherSuccessPayload {
  weather: any;
}

export interface IGetDailyForecastSuccessPayload {
  dailyForecast: any;
}

export interface IGetLocationSuccessPayload {
  locations: string[];
}

export interface IGetLocationRequestPayload {
  keyword: string;
}
// #endregion IPayload

// #region IAction
export interface IGetCurrentWeatherRequest extends IDefaultAction {
  type: typeof GET_CURRENT_WEATHER.REQUEST;
  payload: ISearchWeatherPayload;
}

export interface IGetCurrentWeatherSuccess extends IDefaultAction {
  type: typeof GET_CURRENT_WEATHER.SUCCESS;
  response: IGetCurrentWeatherSuccessPayload;
}

export interface IGetCurrentWeatherError extends IDefaultAction {
  type: typeof GET_CURRENT_WEATHER.ERROR;
  error: ISearchWeatherErrorPayload;
}

export interface IGetDailyForecastRequest extends IDefaultAction {
  type: typeof GET_DAILY_FORECAST.REQUEST;
  payload: ISearchWeatherPayload;
}

export interface IGetDailyForecastSuccess extends IDefaultAction {
  type: typeof GET_DAILY_FORECAST.SUCCESS;
  response: IGetDailyForecastSuccessPayload;
}

export interface IGetDailyForecastError extends IDefaultAction {
  type: typeof GET_DAILY_FORECAST.ERROR;
}

export interface IGetLocationRequest extends IDefaultAction {
  type: typeof GET_LOCATION.REQUEST;
  payload: IGetLocationRequestPayload;
}

export interface IGetLocationSuccess extends IDefaultAction {
  type: typeof GET_LOCATION.SUCCESS;
  response: IGetLocationSuccessPayload;
}

export interface IGetLocationError extends IDefaultAction {
  type: typeof GET_LOCATION.ERROR;
}
// #endregion IAction

export type WeatherActions =
  | IGetCurrentWeatherRequest
  | IGetCurrentWeatherSuccess
  | IGetCurrentWeatherError
  | IGetDailyForecastRequest
  | IGetDailyForecastSuccess
  | IGetDailyForecastError
  | IGetLocationRequest
  | IGetLocationSuccess
  | IGetLocationError;
