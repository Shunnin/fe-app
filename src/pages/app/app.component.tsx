import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { History } from 'history';
import { IntlProvider } from 'react-intl';

import { URL_APP, DEFAULT_LOCALE } from '../../common/utility/constant';
import { appRoutes } from './app.route';

interface AppProps {
  history?: History;
}

export const App: FC<AppProps> = ({ history }) => {
  return (
    <IntlProvider locale={DEFAULT_LOCALE}>
      <BrowserRouter>
        <Switch>
          <Route path={URL_APP} render={() => appRoutes} />
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
};
