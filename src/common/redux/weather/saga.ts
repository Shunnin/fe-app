import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { reduce, join } from 'lodash-es';

import {
  INT_ZERO,
  API_URL_GET_CURRENT_WEATHER,
  API_URL_GET_DAILY_FORECAST,
  API_URL_SEARCH_LOCATION,
} from '../../utility/constant';
import { UrlUtil } from '../../utility';

import {
  getCurrentWeatherError,
  getCurrentWeatherSuccess,
  getDailyForecastSuccess,
  getDailyForecastError,
  getLocationSuccess,
  getLocationError,
} from './action';
import { GET_CURRENT_WEATHER_REQUEST, GET_DAILY_FORECAST_REQUEST, GET_LOCATION_REQUEST } from './action-type';

const getCurrentWeather = (value: any) => {
  const apiUrl = UrlUtil.buildQueryUrl(API_URL_GET_CURRENT_WEATHER, {
    ...value,
    appid: '20571ab45c74dc2a1897b60c5b8047a1',
  });

  return axios.get(apiUrl);
};

const getDailyForecast = (value: any) => {
  console.log('file: saga.ts ~ line 30 ~ getDailyForecast ~ value', value);
  const apiUrl = UrlUtil.buildQueryUrl(API_URL_GET_DAILY_FORECAST, {
    ...value,
    appid: '20571ab45c74dc2a1897b60c5b8047a1',
  });

  return axios.get(apiUrl);
};

const searchLocation = (value: any) => {
  const data = JSON.stringify({
    query: value,
    type: 'city',
    language: 'en',
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
    const response: ResponseGenerator = yield call(getCurrentWeather, action.payload);

    yield put(getCurrentWeatherSuccess(response.data));
  } catch (e) {
    yield put(getCurrentWeatherError(e));
  }
};

const getDailyForecastSaga = function* (action) {
  try {
    const response: ResponseGenerator = yield call(getDailyForecast, action.payload);

    yield put(getDailyForecastSuccess(response.data));
  } catch (e) {
    yield put(getDailyForecastError());
  }
};

const getLocationSaga = function* (action) {
  try {
    const response: ResponseGenerator = yield call(searchLocation, action.payload);
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

    yield put(getLocationSuccess(locations));
  } catch (e) {
    yield put(getLocationError());
  }
};

const weatherSaga = function* () {
  try {
    yield all([
      takeLatest(GET_CURRENT_WEATHER_REQUEST, getCurrentWeatherSaga),
      takeLatest(GET_DAILY_FORECAST_REQUEST, getDailyForecastSaga),
      takeLatest(GET_LOCATION_REQUEST, getLocationSaga),
    ]);
  } catch (e) {
    // ...
  }
};

export default weatherSaga;
