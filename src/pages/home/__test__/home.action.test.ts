import {
  GET_CURRENT_WEATHER,
  GET_DAILY_FORECAST,
  GET_LOCATION,
  getCurrentWeather,
  getDailyForecast,
  getLocation,
} from '../home.action';

describe('Home Action', () => {
  describe('getCurrentWeather()', () => {
    describe('request()', () => {
      it('should return the correct action', () => {
        const payload = {
          q: 'ho chi minh',
        };
        const expectedAction = {
          type: GET_CURRENT_WEATHER.REQUEST,
          payload: payload,
        };

        const action = getCurrentWeather.request(payload);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('success()', () => {
      it('should return the correct action', () => {
        const response = {
          weather: { place: 'ho chi minh' },
        };
        const expectedAction = {
          type: GET_CURRENT_WEATHER.SUCCESS,
          response: response,
        };

        const action = getCurrentWeather.success(response);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('error()', () => {
      it('should return the correct action', () => {
        const error = {
          error: 'Can not fetch the data',
        };
        const expectedAction = {
          type: GET_CURRENT_WEATHER.ERROR,
          error: error,
        };

        const action = getCurrentWeather.error(error);

        expect(action).toEqual(expectedAction);
      });
    });
  });

  describe('getDailyForecast()', () => {
    describe('request()', () => {
      it('should return the correct action', () => {
        const payload = {
          q: 'ho chi minh',
        };
        const expectedAction = {
          type: GET_DAILY_FORECAST.REQUEST,
          payload: payload,
        };

        const action = getDailyForecast.request(payload);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('success()', () => {
      it('should return the correct action', () => {
        const response = {
          dailyForecast: { place: 'ho chi minh', temp: 30 },
        };
        const expectedAction = {
          type: GET_DAILY_FORECAST.SUCCESS,
          response: response,
        };

        const action = getDailyForecast.success(response);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('error()', () => {
      it('should return the correct action', () => {
        const error = {
          error: 'Can not fetch the data',
        };
        const expectedAction = {
          type: GET_DAILY_FORECAST.ERROR,
          error: error,
        };

        const action = getDailyForecast.error(error);

        expect(action).toEqual(expectedAction);
      });
    });
  });

  describe('getLocation()', () => {
    describe('request()', () => {
      it('should return the correct action', () => {
        const payload = {
          q: 'ho chi minh',
        };
        const expectedAction = {
          type: GET_LOCATION.REQUEST,
          payload: payload,
        };

        const action = getLocation.request(payload);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('success()', () => {
      it('should return the correct action', () => {
        const response = {
          locations: ['ho chi minh'],
        };
        const expectedAction = {
          type: GET_LOCATION.SUCCESS,
          response: response,
        };

        const action = getLocation.success(response);

        expect(action).toEqual(expectedAction);
      });
    });

    describe('error()', () => {
      it('should return the correct action', () => {
        const error = {
          error: 'Can not fetch the data',
        };
        const expectedAction = {
          type: GET_LOCATION.ERROR,
          error: error,
        };

        const action = getLocation.error(error);

        expect(action).toEqual(expectedAction);
      });
    });
  });
});
