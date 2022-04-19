const path = require('path');
const dirRoot = path.resolve(__dirname, '..', '..');

const root = (...args) => {
  return path.join.apply(path, [dirRoot].concat(args));
};

const checkNodeEnvironment = (mode) => {
  return (process.env.NODE_ENV || '').toLowerCase() === (mode || '').toLowerCase();
};

const isProd = () => {
  return checkNodeEnvironment('production');
};

const isDev = () => {
  return checkNodeEnvironment('development');
};

const helper = {
  root,
  isProd,
  isDev,
};

export default helper;
