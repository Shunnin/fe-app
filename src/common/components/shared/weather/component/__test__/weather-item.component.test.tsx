import { render, screen } from '@testing-library/react';

import { createMockStore, withReduxProvider } from '../../../../../utility/test';

import { WeatherItem } from '../weather-item/weather-item.component';

describe('<WeatherItem />', () => {
  let store = null;

  const props = {
    day: 'Tue',
    weatherCode: 803,
    tempMax: 33,
    tempMin: 25,
    forecast: 'Sunny',
  };

  beforeAll(() => {
    store = createMockStore();
  });

  it('renders weather item and matches the snapshot when given valid weather', () => {
    const { container } = render(withReduxProvider(store)(<WeatherItem {...props} />));

    const weatherDay = screen.getByText(props.day);
    const weatherForecast = screen.getByText(props.forecast);

    expect(container.firstChild).toMatchSnapshot();
    expect(weatherDay).toBeInTheDocument();
    expect(weatherForecast).toBeInTheDocument();
  });
});
