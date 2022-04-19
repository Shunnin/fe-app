import { WeatherActions, IWeatherState } from './home.constant';
import { GET_CURRENT_WEATHER, GET_DAILY_FORECAST, GET_LOCATION } from './home.action';

const initialState: IWeatherState = {
  loading: false,
  weather: {},
  dailyForecast: {},
  locations: [],
  error: null,
};

export const homeReducer = (state = initialState, action: WeatherActions) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_CURRENT_WEATHER.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CURRENT_WEATHER.SUCCESS:
      return {
        ...state,
        loading: false,
        weather: response,
        error: null,
      };

    case GET_CURRENT_WEATHER.ERROR:
      return {
        ...state,
        loading: false,
        weather: {},
        dailyForecast: {},
        error: error,
      };

    case GET_DAILY_FORECAST.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_DAILY_FORECAST.SUCCESS:
      return {
        ...state,
        loading: false,
        dailyForecast: response,
      };

    case GET_DAILY_FORECAST.ERROR:
      return {
        ...state,
        loading: false,
        dailyForecast: [],
      };

    case GET_LOCATION.SUCCESS:
      return {
        ...state,
        locations: response,
      };

    case GET_LOCATION.ERROR:
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
