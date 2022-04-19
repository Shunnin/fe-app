import { composeWeatherData, composeDailyForecastData } from '../weather.service';

describe('Weather Service', () => {
  describe('composeWeatherData()', () => {
    it.each([
      [undefined, {}],
      [null, {}],
      [{}, {}],
      [[], {}],
    ])('given %p as arguments, returns %p', (data, expectedResult) => {
      const result = composeWeatherData(data);

      expect(result).toEqual(expectedResult);
    });

    it('return correct weather info when provide valid data', () => {
      const validData = {
        coord: { lon: 106.6667, lat: 10.75 },
        weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
        base: 'stations',
        main: {
          temp: 306.16,
          feels_like: 309.18,
          temp_min: 306.16,
          temp_max: 306.16,
          pressure: 1006,
          humidity: 49,
        },
        visibility: 10000,
        wind: { speed: 3.09, deg: 170, gust: 8.75 },
        clouds: { all: 40 },
        dt: 1650273535,
        sys: { type: 1, id: 9314, country: 'VN', sunrise: 1650235253, sunset: 1650279854 },
        timezone: 25200,
        id: 1566083,
        name: 'Ho Chi Minh City',
        cod: 200,
      };

      const result = composeWeatherData(validData);

      expect(result).toEqual({
        description: 'scattered clouds',
        forecast: 'Clouds',
        icon: '03d',
        id: 802,
        name: 'Ho Chi Minh City',
        tempDetails: {
          feelsLike: 36,
          humidity: 49,
          pressure: 1006,
          temp: 33,
          tempMax: 33,
          tempMin: 33,
        },
        wind: {
          deg: 170,
          speed: 11,
        },
      });
    });
  });

  describe('composeDailyForecastData()', () => {
    it.each([
      [undefined, []],
      [null, []],
      [{}, []],
      [[], []],
    ])('given %p as arguments, returns %p', (data, expectedResult) => {
      const result = composeDailyForecastData(data);

      expect(result).toEqual(expectedResult);
    });

    it('return correct weather info when provide valid data', () => {
      const validData = {
        city: {
          id: 1566083,
          name: 'Ho Chi Minh City',
          coord: { lon: 106.6667, lat: 10.75 },
          country: 'VN',
          population: 1000000,
          timezone: 25200,
        },
        cod: '200',
        message: 0.0606551,
        cnt: 7,
        list: [
          {
            dt: 1650254400,
            sunrise: 1650235253,
            sunset: 1650279854,
            temp: { day: 307.49, min: 299.73, max: 308.82, night: 300.88, eve: 305.16, morn: 299.91 },
            feels_like: { day: 310.02, night: 303.3, eve: 307.78, morn: 301.98 },
            pressure: 1010,
            humidity: 43,
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            speed: 6.13,
            deg: 141,
            gust: 10.33,
            clouds: 60,
            pop: 0.25,
            rain: 0.29,
          },
          {
            dt: 1650340800,
            sunrise: 1650321623,
            sunset: 1650366257,
            temp: { day: 307.08, min: 299.11, max: 308.77, night: 300.96, eve: 303.99, morn: 299.44 },
            feels_like: { day: 309.53, night: 303.58, eve: 306.1, morn: 299.44 },
            pressure: 1011,
            humidity: 44,
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            speed: 4.88,
            deg: 138,
            gust: 9.53,
            clouds: 68,
            pop: 0.43,
            rain: 1.64,
          },
          {
            dt: 1650427200,
            sunrise: 1650407994,
            sunset: 1650452661,
            temp: { day: 305.29, min: 299.4, max: 308.75, night: 301.21, eve: 304.74, morn: 299.55 },
            feels_like: { day: 308.54, night: 304.07, eve: 307.71, morn: 299.55 },
            pressure: 1011,
            humidity: 53,
            weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
            speed: 5.13,
            deg: 139,
            gust: 9.2,
            clouds: 97,
            pop: 0.6,
            rain: 1.9,
          },
        ],
      };

      const result = composeDailyForecastData(validData);

      expect(result).toEqual([
        {
          day: 'Wed',
          forecast: 'Rain',
          id: 500,
          tempDetails: {
            tempMax: 36,
            tempMin: 27,
          },
        },
        {
          day: 'Thu',
          forecast: 'Rain',
          id: 500,
          tempDetails: {
            tempMax: 36,
            tempMin: 26,
          },
        },
        {
          day: 'Fri',
          forecast: 'Rain',
          id: 500,
          tempDetails: {
            tempMax: 36,
            tempMin: 26,
          },
        },
      ]);
    });
  });
});
