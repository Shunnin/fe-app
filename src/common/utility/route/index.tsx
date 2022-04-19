import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';
import { map } from 'lodash-es';

/**
 * Transition options when change route
 *
 * @return {Object} Transition options
 */
const transitionOptions = {
  classNames: 'fade',
  appear: true,
  enter: true,
  exit: true,
  timeout: { exit: 300, enter: 500, appear: 300 },
};

/**
 * Render component with animation when route changed
 *
 * @param  {Object} route     Routing info we registered { path, exact, component, routes }
 * @param  {Object} props     Route's props
 * @return {Component}        Route component wrapped in animated transition component
 */
const renderAnimatedComponent = (route, props = {}) => {
  if (route && route.component) {
    return (
      <TransitionGroup>
        <CSSTransition {...transitionOptions}>
          <route.component {...props} route={route} />
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return null;
};

interface IRoute {
  path: string;
  exact?: boolean;
  strict?: boolean;
  component: any;
}

export const renderRoutes = (routes: IRoute[]) => {
  return routes ? (
    <Switch>
      {map(routes, (route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={renderAnimatedComponent.bind(this, route)}
        />
      ))}
    </Switch>
  ) : null;
};
