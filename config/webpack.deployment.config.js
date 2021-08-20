const tld = require('./tld.json');

module.exports = [
  ...tld.map((v) => require('./webpack.config.js')('client', 'deployment', v)),
  ...tld.map((v) => require('./webpack.config.js')('server', 'deployment', v))
];