import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { URL_APP, DEFAULT_LOCALE } from '../../common/utility/constant';
import { appRoutes } from './app.route';

export const App: FC = () => {
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
