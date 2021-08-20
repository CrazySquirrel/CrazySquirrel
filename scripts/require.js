const PATH = require('path');

const MAP = {
  'yandex.webmaster.secret.json': 'YANDEX_WEBMASTER',
  'config.secret.json': 'CONFIG'
};

module.exports = {
  require: (module) => {
    const key = MAP[PATH.basename(module)];

    if (key && process.env[key]) {
      if (module.endsWith('.json')) {
        return JSON.parse(process.env[key]);
      }

      return process.env[key];
    }

    return require(module);
  }
};