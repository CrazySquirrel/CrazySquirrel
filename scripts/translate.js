const PATH = require('path');
const FS = require('fs');
const QUERY_STRING = require('querystring');

function translate(locale) {
  locale = locale === 'base' ? 'en' : locale;

  const existTranslationFile = PATH.resolve(__dirname + `/../i18n/${locale}.json`);
  const missingTranslationFile = PATH.resolve(__dirname + `/../i18n/${locale}-missing.json`);

  const existTranslation = FS.existsSync(existTranslationFile) ? new Map(require(existTranslationFile)) : new Map();
  const missingTranslation = FS.existsSync(missingTranslationFile) ? new Map(require(missingTranslationFile)) : new Map();

  for(const [key, value] of missingTranslation) {
    if (value) {
      existTranslation.set(key, value);
      missingTranslation.delete(key);
    } else {
      console.log(`https://translate.yandex.ru/?${QUERY_STRING.stringify({
        text: key,
        lang: `en-${locale}`
      })}`);
    }
  }

  FS.writeFileSync(existTranslationFile, JSON.stringify(Array.from(existTranslation.entries())));
  FS.writeFileSync(missingTranslationFile, JSON.stringify(Array.from(missingTranslation.entries())));
}

module.exports = {
  translate
};