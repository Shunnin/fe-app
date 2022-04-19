import { createRoot } from 'react-dom/client';
import { App } from './pages/app/app.component';
import { Provider } from 'react-redux';
import { createBrowserHistory, History } from 'history';

import { store } from './store';
import './assets/style/application.scss';

const history: History = createBrowserHistory();
const container = document.getElementById('app');
const root = createRoot(container!);
const appStore = store.create({ history });

root.render(
  <Provider key="provider" store={appStore}>
    <App />
  </Provider>,
);
