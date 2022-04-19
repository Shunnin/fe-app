import { Component as ReactComponent, ElementType } from 'react';

import { retry } from '../../../utility';

interface Dependency {
  saga: any;
  reducer: any;
}

interface AsyncComponentState {
  Component: ElementType;
  componentDependencies: Dependency;
}

const RETRY_COUNT = 5;
const RETRY_INTERVAL = 3000;

export const asyncComponent = options => {
  const { component, store, initialProps = {}, dependencies = {}, moduleName, clearState = true } = options;

  return class AsyncComponent extends ReactComponent<Record<string, unknown>, AsyncComponentState> {
    private moduleNames: string[];

    constructor(props) {
      super(props);

      this.state = {
        Component: null,
        componentDependencies: null,
      };
      this.moduleNames = [];
    }

    loadModuleError = error => {
      throw new Error(`Dynamic component loading failed: ${error}`);
    };

    shouldComponentUpdate(nextProps, nextState) {
      const isStateChanged = this.state !== nextState;
      const isPropsChanged = this.props !== nextProps;

      return isStateChanged || isPropsChanged;
    }

    loadModule = module => {
      const target = module.default || module;
      const componentDependencies = module.dependencies || dependencies;

      this.injectDependencies(componentDependencies);

      this.setState({
        Component: target,
        componentDependencies,
      });
    };

    injectDependencies(componentDependencies) {
      const registerModule = (mName, mDependencies, { setClearState }) => {
        if (!mName) return;

        const { saga, reducer } = mDependencies;

        reducer && store.injectReducer(mName, reducer);
        saga && store.injectSaga(mName, saga);

        setClearState && this.moduleNames.push(mName);
      };

      registerModule(moduleName, componentDependencies, { setClearState: clearState });
    }

    componentDidMount() {
      if (!this.state.Component && component) {
        retry(component, RETRY_COUNT, RETRY_INTERVAL)
          .then(module => {
            this.loadModule(module);
          })
          .catch(error => {
            this.loadModuleError(error);
          });
      }
    }

    componentWillUnmount() {
      // Dispatch enject reducer and saga here
    }

    /**
     * Renders component
     *
     * @returns {Component}  React component
     */
    render() {
      const { Component } = this.state;

      if (Component) {
        const props = Object.assign({}, this.props, initialProps);

        return <Component {...props} />;
      }

      return null;
    }
  };
};
