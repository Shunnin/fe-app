import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import baseSettings from './base';

const { paths, entry, commonLoaders } = baseSettings.settings;
const { resolve, plugins } = baseSettings.webpack;

const config: Configuration = {
  mode: "production",
  entry,
  output: {
    path: paths.build,
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      ...commonLoaders
    ]
  },
  resolve,
  plugins: [
    ...plugins,
    new CleanWebpackPlugin(),
  ],
};

export default config;
