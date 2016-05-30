
var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3300
};

config.env = process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

var envConfig;

try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch(e){
  envConfig = {};
}

module.exports = Object.assign({}, config, envConfig);
