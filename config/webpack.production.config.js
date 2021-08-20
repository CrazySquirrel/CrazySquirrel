const tld = require('./tld.json');

module.exports = [
  ...tld.map((v) => require('./webpack.config.js')('client', 'production', v)),
  ...tld.map((v) => require('./webpack.config.js')('server', 'production', v))
];