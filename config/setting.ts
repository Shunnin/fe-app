import helper from "./helper";

const paths = {
  root: helper.root(),
  build: helper.root('build'),
  config: helper.root('config'),
  source: helper.root('src'),
};

const hosts = {
  dev: process.env.HOST || 'localhost'
};

const ports = {
  dev: process.env.PORT || 4000,
  prod: process.env.PORT_PROD || 4001,
};

const setting = {
  paths,
  hosts,
  ports
};

export default setting;
