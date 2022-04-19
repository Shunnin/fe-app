import { useEffect, FC, useState, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { isEmpty, map } from 'lodash-es';
import { FormattedMessage, useIntl } from 'react-intl';

import { DailyForecastData } from '../../models';
import { WeatherCard, WeatherItem, composeWeatherData, composeDailyForecastData } from '../../common/components/shared';
import { Header, SearchBox, Loading } from '../../common/components/core';
import { changeTempUnit as changeTempUnitAction } from '../../common/redux/service/app/';
import { pipe } from '../../common/utility';

import { getCurrentWeather, getDailyForecast, getLocation } from './home.action';
import { homeSelectors } from './home.selector';
import { homeReducer } from './home.reducer';
import { homeSaga } from './home.saga';
import './home.style';

interface IDailyForecastProps {
  dailyForeCast: DailyForecastData[];
}

const DailyForeCast: FC<IDailyForecastProps> = memo(({ dailyForeCast }) => {
  if (isEmpty(dailyForeCast)) {
    return <></>;
  }

  return (
    <div className="weather-section__forecast">
      <div className="weather-section__forecast-title text-uppercase">
        <FormattedMessage defaultMessage="7-day forecast" />
      </div>
      <div className="weather-section__forecast-items">
        {map(dailyForeCast, (item: DailyForecastData, index: number) => {
          const {
            day,
            id,
            forecast,
            tempDetails: { tempMax, tempMin },
          } = item;

          return (
            <WeatherItem
              key={index}
              day={day}
              weatherCode={id}
              tempMax={tempMax}
              tempMin={tempMin}
              forecast={forecast}
            />
          );
        })}
      </div>
    </div>
  );
});
DailyForeCast.displayName = 'DailyForeCast';

interface IHomeProps {
  error: any;
  loading: boolean;
  weather: any;
  dailyForecast: any;
  locations: string[];
  degreeType: string;
  getCurrentWeatherRequest: Function;
  getDailyForecastRequest: Function;
  getLocationRequest: Function;
  changeTempUnit: Function;
}

const Home: FC<IHomeProps> = ({
  // Props
  error,
  loading,
  weather,
  dailyForecast,
  locations,
  degreeType,
  // Actions
  getCurrentWeatherRequest,
  getDailyForecastRequest,
  getLocationRequest,
  changeTempUnit,
}) => {
  const intl = useIntl();
  const [queryParams, setQueryParams] = useState(null);
  const [composedWeather, setComposedWeather] = useState({});
  const [composedDailyForeCast, setComposedDailyForeCast] = useState([]);

  const handleChangeTempUnit = useCallback(value => changeTempUnit(value), [changeTempUnit]);

  const handleClickSearch = useCallback(value => getLocationRequest(value), [getLocationRequest]);

  const handleClickSuggestion = useCallback(value => setQueryParams({ q: value }), [setQueryParams]);

  useEffect(() => {
    if (!isEmpty(queryParams)) {
      getCurrentWeatherRequest(queryParams);
      getDailyForecastRequest(queryParams);
    }
  }, [queryParams]);

  useEffect(() => {
    if (isEmpty(weather)) {
      setComposedWeather([]);
    } else {
      const result = composeWeatherData(weather);

      setComposedWeather(result);
    }
  }, [weather]);

  useEffect(() => {
    if (isEmpty(dailyForecast)) {
      setComposedDailyForeCast([]);
    } else {
      const result = composeDailyForecastData(dailyForecast);

      setComposedDailyForeCast(result);
    }
  }, [dailyForecast]);

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <Header />
        <div className="weather-section">
          <SearchBox
            placeholder={intl.formatMessage({ defaultMessage: 'Search for location' })}
            suggestions={locations}
            onClickSearch={handleClickSearch}
            onClickSuggestion={handleClickSuggestion}
          />
          {isEmpty(error) ? (
            <>
              <WeatherCard
                weather={composedWeather}
                degreeType={degreeType}
                onClickChangeTempUnit={handleChangeTempUnit}
              />
              <DailyForeCast dailyForeCast={composedDailyForeCast} />
            </>
          ) : (
            <div className="text-center">
              <FormattedMessage defaultMessage="Sorry! No results found" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default pipe(
  connect(homeSelectors, {
    getCurrentWeatherRequest: getCurrentWeather.request,
    getDailyForecastRequest: getDailyForecast.request,
    getLocationRequest: getLocation.request,
    changeTempUnit: changeTempUnitAction,
  }),
)(Home);

export const dependencies = {
  reducer: homeReducer,
  saga: homeSaga,
};
