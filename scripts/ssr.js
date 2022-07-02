const WebManifest = require('../config/site.webmanifest.json');

const FS = require('fs');
const PATH = require('path');
const MINIFY_HTML = require('html-minifier').minify;

const {createElement: h} = require('react');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const {createStore} = require('redux');
const {Provider} = require('react-redux');

const cliProgress = require('cli-progress');
const serialize = require('serialize-javascript');
const mkdirp = require('mkdirp');

function getFile(path) {
  return FS.existsSync(path) ? FS.readFileSync(path, 'utf8') : '';
}

function getMetaTags({i18n, title, description, keywords, author, images, videos, audios, modified, domain, locale}) {
  const result = [];

  if (title) {
    result.push(`<title>${i18n(title)}</title>`);
  }

  if (description) {
    result.push(`<meta name="description" content="${i18n(description)}"/>`);
  }

  if (keywords) {
    result.push(`<meta name="keywords" content="${i18n(keywords)}"/>`);
  }

  if (modified) {
    result.push(`<meta last-modified="${modified}"/>`);
  }

  if (author) {
    result.push(`<meta name="author" content="${i18n(author.name)}"/>`);
  }

  if (title) {
    result.push(`<meta property="og:title" content="${i18n(title)}"/>`);
  }

  if (description) {
    result.push(`<meta property="og:description" content="${i18n(description)}"/>`);
  }

  if (domain) {
    result.push('<meta property="og:type" content="website"/>');
    result.push(`<meta property="og:url" content="${domain}"/>`);
  }

  if (locale) {
    result.push(`<meta property="og:locale" content="${locale}"/>`);
  }

  if (WebManifest.short_name) {
    result.push(`<meta property="og:site_name" content="${WebManifest.short_name}"/>`);
  }

  if (modified) {
    result.push(`<meta property="og:updated_time" content="${modified}"/>`);
  }

  if (images) {
    for (const {src, type, width, height, alt} of images) {
      result.push(`<meta property="og:image" content="${src}"/>`);
      result.push(`<meta property="og:image:type" content="${type}"/>`);
      result.push(`<meta property="og:image:width" content="${width}"/>`);
      result.push(`<meta property="og:image:height" content="${height}"/>`);
      result.push(`<meta property="og:image:alt" content="${i18n(alt)}"/>`);
    }
  }

  if (videos) {
    for (const {src, type, width, height} of videos) {
      result.push(`<meta property="og:video" content="${src}"/>`);
      result.push(`<meta property="og:video:type" content="${type}"/>`);
      result.push(`<meta property="og:video:width" content="${width}"/>`);
      result.push(`<meta property="og:video:height" content="${height}"/>`);
    }
  }

  if (audios) {
    for (const {src, type} of audios) {
      result.push(`<meta property="og:audios" content="${src}"/>`);
      result.push(`<meta property="og:audios:type" content="${type}"/>`);
    }
  }

  return result.join('\r\n');
}

function ssr(locale) {
  const STATIC = PATH.resolve(__dirname + `/../build/${locale}`);

  if (!FS.existsSync(STATIC)) {
    return;
  }

  const i18n = require('./i18n')(locale === 'base' ? 'en' : locale);

  const domain = locale === 'base' ? 'crazysquirrel.ru' : `${locale}.crazysquirrel.ru`;

  console.log(`\r\nhttps://${domain}`);

  delete require.cache[require.resolve(STATIC + '/server/index.js')];

  const {default: App} = require(`${STATIC}/server/index`);
  const {PAGES} = require(`${STATIC}/server/router`);
  const {initialState} = require(`${STATIC}/server/store`);

  const HTML = getFile(PATH.resolve(STATIC, 'static/index.html'));
  const INLINE_STYLE = getFile(PATH.resolve(STATIC, 'static/inline.css'));
  const INLINE_SCRIPT = getFile(PATH.resolve(STATIC, 'static/inline.js'));
  const SVG = getFile(PATH.resolve(STATIC, 'static/sprite.svg'));

  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  bar.start(Object.keys(PAGES).length, 0);

  let i = 0;

  for (const [url,{metadata: {title, description, keywords, author, images, videos, audios}}] of Object.entries(PAGES)) {
    const context = {};

    const store = createStore((state) => JSON.parse(JSON.stringify(state)), {
      ...initialState,
      router: {
        ...initialState.router,
        location: url,
        modified: (new Date()).toISOString(),
      }
    });

    const result = renderToString(h(Provider, {store}, h(StaticRouter, {location: url, context}, h(App))));

    const metatags = getMetaTags({
      i18n,
      title,
      description,
      keywords,
      author,
      images,
      videos,
      audios,
      modified: (new Date()).toISOString(),
      domain: `https://${domain}`,
      locale: locale === 'base' ? 'en' : locale
    });

    const html = MINIFY_HTML(
        HTML
        .replace(/%LOCALE%/ig, locale === 'base' ? 'en' : locale)
        .replace(/%META_TAGS%/ig, metatags)
        .replace(/%INLINE_STYLE%/ig, INLINE_STYLE)
        .replace(/%PRELOADED_STATE%/ig, serialize(store.getState()))
        .replace(/%INLINE_SCRIPT%/ig, INLINE_SCRIPT)
        .replace(/%SVG_SPRITE%/ig, SVG)
        .replace(/%APP%/ig, result),
        {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          minifyJS: true
        }
    );

    const outFile = url !== '*' ? PATH.join(STATIC, url, 'index.html') : PATH.join(STATIC, '/404.html');

    mkdirp.sync(PATH.dirname(outFile));

    FS.writeFileSync(outFile, html);

    bar.update(++i);
  }

  bar.stop();
}

module.exports = {
  ssr
};
