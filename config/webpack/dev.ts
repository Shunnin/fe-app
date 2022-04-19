import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import baseSettings from './base';

const { paths, ports, entry, commonLoaders } = baseSettings.settings;
const { resolve, plugins } = baseSettings.webpack;

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry,
  module: {
    rules: [
      ...commonLoaders
    ]
  },
  resolve,
  plugins,
  devServer: {
    static: paths.build,
    historyApiFallback: true,
    port: ports.dev,
    open: true,
    hot: true,
  },
  devtool: 'inline-source-map',
  performance: {
    maxEntrypointSize: 800000,
  },
};

export default config;
