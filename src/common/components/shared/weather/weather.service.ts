import { isEmpty, map } from 'lodash-es';

import { WeatherData, DailyForecastData } from '../../../../models';
import { INT_ZERO } from '../../../utility/constant';
import { kelvinToCelsius, kphSpeed, getNextSevenDays } from '../../../utility';

export const composeWeatherData = (data: any): {} | WeatherData => {
  if (isEmpty(data)) {
    return {};
  }

  const {
    name,
    main: { temp, feels_like: feelsLike, temp_min: tempMin, temp_max: tempMax, pressure, humidity },
    wind: { speed, deg },
  } = data;
  const { id, description, main: forecast, icon } = data.weather[INT_ZERO];

  return {
    id,
    forecast,
    description,
    icon,
    name,
    tempDetails: {
      temp: kelvinToCelsius(temp),
      feelsLike: kelvinToCelsius(feelsLike),
      tempMin: kelvinToCelsius(tempMin),
      tempMax: kelvinToCelsius(tempMax),
      pressure,
      humidity,
    },
    wind: {
      speed: kphSpeed(speed),
      deg,
    },
  };
};

export const composeDailyForecastData = (data: any): DailyForecastData[] => {
  const next7Days = getNextSevenDays();
  const { list } = data || {};

  if (isEmpty(list)) {
    return [];
  }

  return map(list, (item: any, index: number) => {
    const {
      weather,
      temp: { max, min },
    } = item;
    const { id, main: forecast } = weather[INT_ZERO];

    return {
      day: next7Days[index],
      id,
      forecast,
      tempDetails: {
        tempMax: kelvinToCelsius(max),
        tempMin: kelvinToCelsius(min),
      },
    };
  });
};
