const FS = require('fs');
const PATH = require('path');

module.exports = (locale) => {
  const existTranslationFile = PATH.resolve(__dirname + `/../i18n/${locale}.json`);
  const missingTranslationFile = PATH.resolve(__dirname + `/../i18n/${locale}-missing.json`);

  const existTranslation = FS.existsSync(existTranslationFile) ? new Map(require(existTranslationFile)) : new Map();
  const missingTranslation = FS.existsSync(missingTranslationFile) ? new Map(require(missingTranslationFile)) : new Map();

  return (text) => {
    if (existTranslation.has(text)) {
      return existTranslation.get(text);
    }

    if (missingTranslation.has(text)) {
      return missingTranslation.get(text);
    }

    missingTranslation.set(text, '');

    FS.writeFileSync(missingTranslationFile, JSON.stringify(Array.from(missingTranslation.entries())));

    return text;
  };
};
