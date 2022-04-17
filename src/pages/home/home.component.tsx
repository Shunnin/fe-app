import { useEffect, FC, useState, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, map } from 'lodash-es';
import { FormattedMessage, useIntl } from 'react-intl';

import { DailyForecastData } from '../../models';
import { WeatherCard, WeatherItem, composeWeatherData, composeDailyForecastData } from '../../common/components/shared';
import { Header, SearchBox, Loading } from '../../common/components/core';

import { changeTempUnit } from '../../common/redux/app/action';
import {
  getCurrentWeatherRequest,
  getDailyForecastRequest,
  getLocationRequest,
} from '../../common/redux/weather/action';
import {
  getLoadingSelector,
  getWeatherSelector,
  getDailyForecastSelector,
  getLocationsSelector,
  getErrorSelector,
} from '../../common/redux/weather/selector';

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

const Home: FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useState(null);
  const [locations, setLocations] = useState([] as string[]);
  const [weather, setWeather] = useState({});
  const [dailyForeCast, setDailyForeCast] = useState([]);

  const { degreeType } = useSelector((state: any) => ({
    degreeType: state?.app?.tempUnit,
  }));

  const errors = useSelector(getErrorSelector);
  const loading = useSelector(getLoadingSelector);
  const weatherSel = useSelector(getWeatherSelector);
  const dailyForecastSel = useSelector(getDailyForecastSelector);
  const locationsSel = useSelector(getLocationsSelector);

  const handleChangeTempUnit = useCallback(value => {
    dispatch(changeTempUnit(value));
  }, []);

  const handleClickSearch = useCallback(
    value => {
      dispatch(getLocationRequest(value));
    },
    [getLocationRequest],
  );

  const handleClickSuggestion = useCallback(
    value => {
      setQueryParams({ q: value });
    },
    [setQueryParams],
  );

  useEffect(() => {
    if (!isEmpty(queryParams)) {
      dispatch(getCurrentWeatherRequest(queryParams));
      dispatch(getDailyForecastRequest(queryParams));
    }
  }, [queryParams]);

  useEffect(() => {
    if (!isEmpty(weatherSel)) {
      const composedWeather = composeWeatherData(weatherSel);

      setWeather(composedWeather);
    }
  }, [weatherSel]);

  useEffect(() => {
    if (!isEmpty(dailyForecastSel)) {
      const composeDailyForecast = composeDailyForecastData(dailyForecastSel);

      setDailyForeCast(composeDailyForecast);
    }
  }, [dailyForecastSel]);

  useEffect(() => {
    setLocations(locationsSel);
  }, [locationsSel]);

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
          {isEmpty(errors) ? (
            <>
              <WeatherCard weather={weather} degreeType={degreeType} onClickChangeTempUnit={handleChangeTempUnit} />
              <DailyForeCast dailyForeCast={dailyForeCast} />
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

export default Home;
