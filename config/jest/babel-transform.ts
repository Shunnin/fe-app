'use strict';

const babelJestModule = require('babel-jest');

const babelJest = babelJestModule.__esModule ? babelJestModule.default : babelJestModule;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = babelJest.createTransformer({
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic',
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-transform-regenerator",
      {
        "regenerator": true
      }
    ],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],
  babelrc: false,
  configFile: false,
});
