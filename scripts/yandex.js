const FS = require('fs');
const PATH = require('path');

const KEYS = require('./require').require('../config/yandex.webmaster.secret.json');

function yandex(locale) {
  const STATIC = PATH.resolve(__dirname + `/../build/${locale}`);

  if (!FS.existsSync(STATIC)) {
    return;
  }

  FS.writeFileSync(PATH.join(STATIC, `yandex_${KEYS[locale]}.html`), [
    '<html>',
    '<head>',
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">',
    '</head>',
    `<body>Verification: ${KEYS[locale]}</body>`,
    '</html>',
  ].join('\r\n'));
}

module.exports = {
  yandex
};
