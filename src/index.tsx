import { createRoot } from 'react-dom/client';
import { App } from './pages/app/app.component';
import { Provider } from 'react-redux';
import { createBrowserHistory, History } from 'history';

import store from './common/redux/store';
import './assets/style/application.scss';

const history: History = createBrowserHistory();
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <Provider key="provider" store={store}>
    <App history={history} />
  </Provider>,
);
