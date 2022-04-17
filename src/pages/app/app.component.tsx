import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { History } from 'history';

import { appRoutes } from './app.route';

interface AppProps {
  history?: History;
}

export const App: FC<AppProps> = ({ history }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} render={() => appRoutes} />
      </Switch>
    </BrowserRouter>
  );
};
