import { homeReducer } from '../home.reducer';
import { getCurrentWeather, getDailyForecast, getLocation } from '../home.action';

describe('Home Reducer', () => {
  it('returns the initial state', () => {
    const action = {
      type: 'DUMMY_ACTION',
    };
    const reducer = homeReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  describe('handles the getCurrentWeather action', () => {
    it('returns loading state is true with execute action request', () => {
      const getCurrentWeatherAction = getCurrentWeather.request({ q: 'ho chi minh' });
      const reducer = homeReducer(undefined, getCurrentWeatherAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns weather state and loading is false with execute action success', () => {
      const getCurrentWeatherAction = getCurrentWeather.success({ place: 'ho chi minh' });
      const reducer = homeReducer(undefined, getCurrentWeatherAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns empty weather and loading is false is false with execute action error', () => {
      const getCurrentWeatherAction = getCurrentWeather.error('Can not fetch the data');
      const reducer = homeReducer(undefined, getCurrentWeatherAction);

      expect(reducer).toMatchSnapshot();
    });
  });

  describe('handles the getDailyForecast action', () => {
    it('returns loading state is true with execute action request', () => {
      const getDailyForecastAction = getDailyForecast.request({ q: 'ho chi minh' });
      const reducer = homeReducer(undefined, getDailyForecastAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns dailyForecast state and loading is false with execute action success', () => {
      const getDailyForecastAction = getDailyForecast.success({ place: 'ho chi minh', temp: 30 });
      const reducer = homeReducer(undefined, getDailyForecastAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns empty dailyForecast and loading is false is false with execute action error', () => {
      const getDailyForecastAction = getDailyForecast.error('Can not fetch the data');
      const reducer = homeReducer(undefined, getDailyForecastAction);

      expect(reducer).toMatchSnapshot();
    });
  });

  describe('handles the getLocation action', () => {
    it('returns the initial state with execute action request', () => {
      const getLocationAction = getLocation.request({ q: 'ho chi minh' });
      const reducer = homeReducer(undefined, getLocationAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns locations state with execute action success', () => {
      const getLocationAction = getLocation.success(['ho chi minh']);
      const reducer = homeReducer(undefined, getLocationAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns empty locations with execute action error', () => {
      const getLocationAction = getLocation.error('Can not fetch the data');
      const reducer = homeReducer(undefined, getLocationAction);

      expect(reducer).toMatchSnapshot();
    });
  });
});
