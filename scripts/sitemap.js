const FS = require('fs');
const PATH = require('path');

function getPriority(url) {
  return (1 / (url.split('/').length - 1)).toFixed(2);
}

function sitemap(locale) {
  const STATIC = PATH.resolve(__dirname + `/../build/${locale}`);

  if (!FS.existsSync(STATIC)) {
    return;
  }

  const {PAGES} = require(`${STATIC}/server/router`);

  const domain = locale === 'base' ? 'crazysquirrel.ru'
      : `${locale}.crazysquirrel.ru`;

  const xml = ['<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

  for (const [url] of Object.entries(PAGES)) {
    if (url === '*') {
      continue;
    }

    xml.push('\t<url>');
    xml.push(`\t\t<loc>https://${domain}${url}</loc>`);
    xml.push(`\t\t<lastmod>${(new Date()).toISOString()}</lastmod>`);
    xml.push(`\t\t<priority>${getPriority(url)}</priority>`);
    xml.push('\t</url>');
  }
  xml.push('</urlset>');

  FS.writeFileSync(PATH.join(STATIC, 'sitemap.xml'), xml.join('\r\n'));
}

module.exports = {
  sitemap
};
