import { FC, memo } from 'react';

import { WeatherData } from '../../../../../../models';
import { EMPTY_FUNC, TEMP_UNIT, TEMP_UNIT_MAPPING_LABEL, TEMP_UNIT_VALUE, kmToMile } from '../../../../../utility';

import { ToggleSwitch } from '../../../../core/toggle-switch';
import { Temperature } from '../temperature/temperature.component';
import { WeatherIcon, HighIcon, HumidityIcon, LowIcon, PressureIcon, WindIcon } from '../weather-icon';

import './weather-card.style';

interface IWeatherCardStatusProps {
  weatherCode: number;
  name: string;
  temp: number;
  description: string;
}

const WeatherCardStatus: FC<IWeatherCardStatusProps> = ({ weatherCode, name, temp, description }) => {
  return (
    <div className="weather-card__status">
      <div className="weather-card__status-name">{name}</div>
      <div className="flex">
        <WeatherIcon code={weatherCode} big />
        <Temperature value={temp} />
      </div>
      <div className="weather-card__status-desc text-capitalize">{description}</div>
    </div>
  );
};

interface IWeatherCardInfoProps {
  weather: WeatherData | {};
  degreeType: string;
}

const WeatherCardInfo: FC<IWeatherCardInfoProps> = ({ weather, degreeType }) => {
  const { tempDetails: { feelsLike, tempMax, tempMin, humidity, pressure } = {}, wind: { speed } = {} } =
    weather as WeatherData;

  return (
    <div className="weather-card__info">
      <div className="weather-card__info-feels-like">
        Feels like <Temperature value={feelsLike} />
      </div>
      <div className="weather-card__info-temp-degree">
        <div className="weather-degree">
          <HighIcon />
          <Temperature value={tempMax} />
        </div>
        <div className="weather-degree">
          <LowIcon />
          <Temperature value={tempMin} />
        </div>
      </div>
      <div className="weather-card__info-detail">
        <div>
          <HumidityIcon />
          {'Humidity'}
        </div>
        <span>{humidity}%</span>
      </div>
      <div className="weather-card__info-detail">
        <div>
          <WindIcon />
          {'Wind'}
        </div>
        <span>
          {degreeType === TEMP_UNIT.CELSIUS ? speed : kmToMile(speed)}
          {degreeType === TEMP_UNIT.CELSIUS ? 'kph' : 'mph'}
        </span>
      </div>
      <div className="weather-card__info-detail">
        <div>
          <PressureIcon />
          {'Pressure'}
        </div>
        <span>{pressure}hPa</span>
      </div>
    </div>
  );
};

interface IWeatherCardProps {
  weather: WeatherData | {};
  degreeType: string;
  onClickChangeTempUnit: Function;
}

export const WeatherCard: FC<IWeatherCardProps> = memo(
  ({ weather, degreeType, onClickChangeTempUnit = EMPTY_FUNC }) => {
    const { name, id, description, tempDetails: { temp } = {} } = weather as WeatherData;

    return (
      <div className="weather-card">
        <div className="flex space-between">
          <div className="weather-card__title">Current Weather</div>
          <div className="weather-card__toggle">
            <ToggleSwitch
              name="Temperature Unit"
              defaultValue={TEMP_UNIT_VALUE.CELSIUS}
              mappingLabel={TEMP_UNIT_MAPPING_LABEL}
              onClick={onClickChangeTempUnit}
            />
          </div>
        </div>
        <div className="weather-card__content">
          <WeatherCardStatus weatherCode={id} name={name} temp={temp} description={description} />
          <WeatherCardInfo weather={weather} degreeType={degreeType} />
        </div>
      </div>
    );
  },
);
WeatherCard.displayName = 'WeatherCard';
