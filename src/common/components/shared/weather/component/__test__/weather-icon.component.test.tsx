import { render } from '@testing-library/react';

import { WeatherIcon } from '../weather-icon/weather-icon.component';

describe('<WeatherIcon />', () => {
  it.each([
    [800],
    [801],
    [802],
    [803],
    [804],
    [500],
    [501],
    [520],
    [521],
    [511],
    [502],
    [503],
    [504],
    [522],
    [531],
    [300],
    [301],
    [302],
    [310],
    [311],
    [312],
    [313],
    [314],
    [321],
    [200],
    [201],
    [202],
    [210],
    [211],
    [212],
    [221],
    [230],
    [231],
    [232],
    [600],
    [601],
    [602],
    [612],
    [613],
    [615],
    [616],
    [620],
    [621],
    [622],
    [611],
    [701],
    [711],
    [721],
    [731],
    [741],
    [751],
    [761],
    [762],
    [771],
    [781],
    [99999],
  ])('renders weather icon and matches the snapshot when given weather code is %p', code => {
    const { container } = render(<WeatherIcon code={code} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders big weather icon and matches the snapshot', () => {
    const { container } = render(<WeatherIcon code={800} big />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
