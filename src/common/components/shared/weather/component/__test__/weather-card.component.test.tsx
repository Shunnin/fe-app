import { render } from '@testing-library/react';

import { TEMP_UNIT } from '../../../../../utility/constant';
import { createMockStore, withIntlProvider } from '../../../../../utility/test';

import { WeatherCard } from '../weather-card/weather-card.component';

describe('<WeatherCard />', () => {
  let store = null;
  const onClickChangeTempUnitMock = jest.fn();
  const validWeather = {
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
  };
  const props = {
    weather: validWeather,
    degreeType: TEMP_UNIT.CELSIUS,
    onClickChangeTempUnit: onClickChangeTempUnitMock,
  };

  beforeAll(() => {
    store = createMockStore();
  });

  it('renders empty element and matches the snapshot when given empty weather', () => {
    const { container } = render(withIntlProvider(store)(<WeatherCard {...props} weather={{}} />));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders weather card and matches the snapshot when given valid weather', () => {
    const { container } = render(withIntlProvider(store)(<WeatherCard {...props} />));

    expect(container.firstChild).toMatchSnapshot();
  });
});
