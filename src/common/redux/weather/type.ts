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

export interface IWeatherState {
  loading: boolean;
  weather: any;
  dailyForecast: any;
  locations: any[];
  errors: any;
}

// #region IPayload
export interface ISearchWeatherPayload {
  q?: string;
}

// #region IPayload
export interface ISearchWeatherErrorPayload {
  errors: any;
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
export interface IGetCurrentWeatherRequest {
  type: typeof GET_CURRENT_WEATHER_REQUEST;
  payload: ISearchWeatherPayload;
}

export type IGetCurrentWeatherSuccess = {
  type: typeof GET_CURRENT_WEATHER_SUCCESS;
  payload: IGetCurrentWeatherSuccessPayload;
};

export interface IGetCurrentWeatherError {
  type: typeof GET_CURRENT_WEATHER_ERROR;
  payload: ISearchWeatherErrorPayload;
}

export interface IGetDailyForecastRequest {
  type: typeof GET_DAILY_FORECAST_REQUEST;
  payload: ISearchWeatherPayload;
}

export type IGetDailyForecastSuccess = {
  type: typeof GET_DAILY_FORECAST_SUCCESS;
  payload: IGetDailyForecastSuccessPayload;
};

export interface IGetDailyForecastError {
  type: typeof GET_DAILY_FORECAST_ERROR;
}

export interface IGetLocationRequest {
  type: typeof GET_LOCATION_REQUEST;
  payload: IGetLocationRequestPayload;
}

export type IGetLocationSuccess = {
  type: typeof GET_LOCATION_SUCCESS;
  payload: IGetLocationSuccessPayload;
};

export interface IGetLocationError {
  type: typeof GET_LOCATION_ERROR;
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
