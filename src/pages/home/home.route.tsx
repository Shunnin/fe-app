import { lazy } from 'react';

import { asyncComponent } from '../../common/components/core';

// const HomeComponent = lazy(() => import('./home.component'));
const homeComponent = () => import('./home.component');

const component = asyncComponent({
  component: homeComponent,
});

export const homeRoute = {
  path: '/',
  exact: true,
  component,
  routes: [],
};
