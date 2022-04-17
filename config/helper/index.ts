const path = require('path');
const dirRoot = path.resolve(__dirname, '..', '..');

/**
 * Converts path to url
 *
 * @param  {string} filePath       file path string
 * @return {string}                file url
 */
const pathToUrl = (filePath) => {
  return (filePath || '').replace(/\\/g, '/');
};

/**
 * Generates path start with root directory based on args
 *
 * @param  {array} args    path parts
 * @return {string}        path string
 */
const root = (...args) => {
  return path.join.apply(path, [dirRoot].concat(args));
};

/**
 * Joins path
 *
 * @param  {array} args paths
 * @return {string}     joined path
 */
const join = (...args) => {
  return path.join(...args);
};

/**
 * Generates url based on args
 *
 * @param  {array} args    url parts
 * @return {string}        url string
 */
const url = (...args) => {
  return pathToUrl(args.join('/'));
};

/**
 * Checks node environment
 *
 * @param  {string} mode  Environment mode
 * @return {type}         True if is in right mode
 */
const checkNodeEnvironment = (mode) => {
  return (process.env.NODE_ENV || '').toLowerCase() === (mode || '').toLowerCase();
};

/**
 * Checks node environment is PRODUCTION or not
 *
 * @return {bool} true if PRODUCTION mode
 */
const isProd = () => {
  return checkNodeEnvironment('production');
};

/**
 * Checks node environment is DEVELOPMENT or not
 *
 * @return {bool} true if DEVELOPMENT mode
 */
const isDev = () => {
  return checkNodeEnvironment('development');
};

/**
 * Checks node environment is TEST or not
 *
 * @return {bool} true if TEST mode
 */
const isTest = () => {
  return checkNodeEnvironment('test');
};

/**
* Export helper methods
*/
module.exports = {
  url,
  pathToUrl,
  root,
  join,
  isProd,
  isDev,
  isTest,
};