import { render, screen } from '@testing-library/react';

import { createMockStore, withRouteProvider } from '../../../../utility/test';

import { Header } from '../header.component';

describe('<Header />', () => {
  it('renders and matches the snapshot', () => {
    const store = createMockStore();
    const { container } = render(withRouteProvider(store)(<Header />));

    const searchBoxEl = container.firstChild;
    const searchBoxPlaceHolder = screen.getByText('Welcome, baby');

    expect(searchBoxEl).toMatchSnapshot();
    expect(searchBoxPlaceHolder).toBeInTheDocument();
  });
});
