import { FC } from 'react';

import { Temperature } from '../temperature/temperature.component';
import { WeatherIcon } from '../weather-icon';

import './weather-item.style';

interface IWeatherItemProps {
  day: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  forecast: string;
}

export const WeatherItem: FC<IWeatherItemProps> = ({ day, weatherCode, tempMax, tempMin, forecast }) => {
  return (
    <div className="weather-item">
      <div className="weather-item__day">{day}</div>
      <WeatherIcon code={weatherCode} />
      <div className="weather-item__forecast">{forecast}</div>
      <span className="weather-item__degree">
        <Temperature value={tempMax} />
        <small>&nbsp;/&nbsp;</small>
        <Temperature value={tempMin} />
      </span>
    </div>
  );
};
