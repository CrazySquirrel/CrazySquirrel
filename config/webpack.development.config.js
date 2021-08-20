const tld = require('./tld.json');

module.exports = [
  ...tld.map((v) => require('./webpack.config.js')('client', 'development', v)),
  ...tld.map((v) => require('./webpack.config.js')('server', 'development', v))
];