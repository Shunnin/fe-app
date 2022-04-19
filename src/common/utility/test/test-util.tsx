import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { DEFAULT_LOCALE } from '../constant';

const mockStore = configureMockStore();

export const createMockStore = (initialState = {}) =>
  mockStore({
    ...initialState,
    localization: {
      locale: DEFAULT_LOCALE,
    },
  });

// eslint-disable-next-line react/display-name
export const withReduxProvider = (store: any) => (child: any) => <Provider store={store}>{child}</Provider>;

export const withIntlProvider = (store: any) => child =>
  withReduxProvider(store)(<IntlProvider locale={DEFAULT_LOCALE}>{child}</IntlProvider>);

export const withRouteProvider = (store: any) => child =>
  withIntlProvider(store)(<BrowserRouter>{child}</BrowserRouter>);
