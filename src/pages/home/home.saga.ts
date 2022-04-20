import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { reduce, join } from 'lodash-es';

import {
  INT_ZERO,
  DEFAULT_LOCALE,
  API_URL_GET_CURRENT_WEATHER,
  API_URL_GET_DAILY_FORECAST,
  API_URL_SEARCH_LOCATION,
  WEATHER_API_KEY,
} from '../../common/utility/constant';
import { UrlUtil } from '../../common/utility';

import {
  GET_CURRENT_WEATHER,
  GET_DAILY_FORECAST,
  GET_LOCATION,
  getCurrentWeather,
  getDailyForecast,
  getLocation,
} from './home.action';

const getCurrentWeatherApi = (value: any) => {
  const apiUrl = UrlUtil.buildQueryUrl(API_URL_GET_CURRENT_WEATHER, {
    ...value,
    appid: WEATHER_API_KEY,
  });

  return axios.get(apiUrl);
};

const getDailyForecastApi = (value: any) => {
  const apiUrl = UrlUtil.buildQueryUrl(API_URL_GET_DAILY_FORECAST, {
    ...value,
    appid: WEATHER_API_KEY,
  });

  return axios.get(apiUrl);
};

const searchLocationApi = (value: any) => {
  const data = JSON.stringify({
    query: value,
    type: 'city',
    language: DEFAULT_LOCALE,
  });

  return axios.post(API_URL_SEARCH_LOCATION, data);
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const getCurrentWeatherSaga = function* (action) {
  try {
    const response: ResponseGenerator = yield call(getCurrentWeatherApi, action.payload);

    yield put(getCurrentWeather.success(response.data));
  } catch (e) {
    yield put(getCurrentWeather.error(e));
  }
};

const getDailyForecastSaga = function* (action) {
  try {
    const response: ResponseGenerator = yield call(getDailyForecastApi, action.payload);

    yield put(getDailyForecast.success(response.data));
  } catch (e) {
    yield put(getDailyForecast.error());
  }
};

const getLocationSaga = function* (action) {
  try {
    const response: ResponseGenerator = yield call(searchLocationApi, action.payload);
    const { data: { hits } = {} } = response;
    const locations = reduce(
      hits,
      (result, item) => {
        if (item.is_city) {
          result.push(join([item.locale_names[INT_ZERO], item.country], ', '));
        }

        return result;
      },
      [],
    );

    yield put(getLocation.success(locations));
  } catch (e) {
    yield put(getLocation.error());
  }
};

export const homeSaga = function* () {
  try {
    yield all([
      takeLatest(GET_CURRENT_WEATHER.REQUEST, getCurrentWeatherSaga),
      takeLatest(GET_DAILY_FORECAST.REQUEST, getDailyForecastSaga),
      takeLatest(GET_LOCATION.REQUEST, getLocationSaga),
    ]);
  } catch (e) {
    // ...
  }
};
