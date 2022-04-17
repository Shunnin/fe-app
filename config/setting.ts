const helper = require('../helper');

/* Paths info */
const paths = {
  // Function to join paths
  join: helper.join,
  // <root>/
  root: helper.root(),
  // <root>/_dist
  dist: helper.root('_dist'),
  // <root>/_dist/app
  distApp: helper.root('_dist', 'app'),
  // <root>/_dist/app
  distAppFont: helper.root('_dist', 'app', 'asset', 'font'),
  // <root>/_dist/core
  distCore: helper.root('_dist', 'core'),
  // <root>/config
  config: helper.root('config'),
  // <root>/src
  source: helper.root('src'),
  // <root>/src/app
  app: helper.root('src', 'app'),
  // <root>/src/core
  core: helper.root('src', 'core'),
  // <root>/src/app/asset
  coreAsset: helper.root('src', 'core', 'asset')
};

/* Urls info */
const urls = {
  image: helper.url('asset', 'image'),
  font: helper.url('asset', 'font'),
  style: helper.url('asset', 'style')
};

/* Hosts info */
const hosts = {
  app: process.env.HOST || 'localhost'
};

/* Ports info */
const ports = {
  app: process.env.PORT || 4000,
  prod: process.env.PORT_PROD || 4001,
};

/* Export info */
module.exports = {
  paths,
  urls,
  hosts,
  ports
};
