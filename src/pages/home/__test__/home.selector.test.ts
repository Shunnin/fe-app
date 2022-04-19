import {
  weatherSelector,
  dailyForecastSelector,
  locationsSelector,
  loadingSelector,
  errorSelector,
} from '../home.selector';
import { HOME_MODULE } from '../home.constant';

describe('Home Selector', () => {
  it('should get correct property from state', () => {
    const expected = {
      loading: true,
      weather: { temp: 30, description: 'sunny' },
      dailyForecast: {
        hits: [
          { day: 1, temp: 30 },
          { day: 1, temp: 29 },
        ],
      },
      locations: ['ho chi minh', 'ha noi'],
      error: null,
    };
    const state = {
      [HOME_MODULE]: {
        loading: expected.loading,
        weather: expected.weather,
        dailyForecast: expected.dailyForecast,
        locations: expected.locations,
        error: expected.error,
      },
    };

    const selector = {
      loading: loadingSelector(state),
      dailyForecast: dailyForecastSelector(state),
      locations: locationsSelector(state),
      error: errorSelector(state),
      weather: weatherSelector(state),
    };

    expect(selector).toEqual(expected);
  });
});
