import { store } from '../../store';
import { asyncComponent } from '../../common/components/core';
import { URL_HOME } from '../../common/utility/constant';

import { HOME_MODULE } from './home.reducer';

const component = asyncComponent({
  component: () =>
    import(
      /* webpackChunkName: 'front-app' */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      './home.component'
    ),
  store,
  moduleName: HOME_MODULE,
});

export const homeRoute = {
  component,
  path: URL_HOME,
  exact: true,
  routes: [],
};
