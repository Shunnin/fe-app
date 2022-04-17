import { Component as ReactComponent, ElementType } from 'react';
import { noop } from 'lodash-es';

import { retry } from '../../../utility';

interface Dependency {
  saga: any;
  reducer: any;
  relative?: any;
}

interface AsyncComponentState {
  Component: ElementType;
  componentDependencies: Dependency;
}

const RETRY_COUNT = 5;
const RETRY_INTERVAL = 3000;

/**
 * Higher order component that handle Async load component
 *
 * @param   {Object} options   Parameters is passed to decorator component
 * @returns {Func}             Enhancer decorator
 */
export const asyncComponent = options => {
  /**
   * @param {Promise} component      System.import()
   * @param {*}       store          Store
   * @param {Object}  initialProps   Initial props
   * @param {Object}  dependencies   Dependencies
   */
  const { component, store, initialProps = {}, dependencies = {}, moduleName, clearState = true } = options;

  return class AsyncComponent extends ReactComponent<{}, AsyncComponentState> {
    private moduleNames: string[];

    /**
     * Constructor
     *
     * @param   {Object} props   Props
     * @returns {Void}
     */
    constructor(props) {
      super(props);

      this.state = {
        Component: null,
        componentDependencies: null,
      };
      this.moduleNames = [];
    }

    /**
     * Handles load module error
     *
     * @param   {String} error   Error string
     * @returns {Error}          Throw Error message
     */
    loadModuleError = error => {
      throw new Error(`Dynamic component loading failed: ${error}`);
    };

    /**
     * Handles should component update or not
     *
     * @param   {Object} nextProps   The nextProps
     * @param   {Object} nextState   The nextState
     * @returns {Boolean}            Should update or not
     */
    shouldComponentUpdate(nextProps, nextState) {
      const isStateChanged = this.state !== nextState;
      const isPropsChanged = this.props !== nextProps;

      return isStateChanged || isPropsChanged;
    }

    /**
     * Handles load module
     *
     * @param   {Object} module   Module object
     * @returns {Func}            Module/Class/Function
     */
    loadModule = module => {
      const target = module.default || module;
      const componentDependencies = module.dependencies || dependencies;

      // this.injectDependencies(componentDependencies);

      this.setState({
        Component: target,
        componentDependencies,
      });
    };

    /**
     * Injects dependencies for using when component mounted
     *
     * @param   {Object} componentDependencies The loaded dependencies
     * @returns {Void}
     */
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
      // store && store.dispatch(clearModuleState({ moduleNames: this.moduleNames }));
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
