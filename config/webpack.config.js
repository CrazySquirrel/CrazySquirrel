const path = require('path');
const webpack = require('webpack');

const PACKAGE = require('../package.json');
const WebManifest = require('./site.webmanifest.json');

const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExcludeAssetsPlugin = require('@ianwalter/exclude-assets-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const GenerateFile = require('generate-file-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const Targets = {
  CLIENT: 'client',
  SERVER: 'server',
};

const getTarget = (target) => {
  switch (target) {
    case Targets.CLIENT:
      return 'web';
    case Targets.SERVER:
      return 'node';
  }
};

const getOutputPath = (target, locale) => {
  switch (target) {
    case Targets.CLIENT:
      return path.resolve(__dirname, `../build/${locale}/static`);
    case Targets.SERVER:
      return path.resolve(__dirname, `../build/${locale}/server`);
  }
};

function getPublicPath(target) {
  switch (target) {
    case Targets.CLIENT:
    case Targets.SERVER:
      return '/static/';
  }
}

const getEntry = (target) => {
  switch (target) {
    case Targets.CLIENT:
      return {
        index: './src/client.tsx',

        inline: [
          './src/scss/inline.scss',
          './src/inline.ts'
        ],
      };
    case Targets.SERVER:
      return {
        router: './src/routs/index.tsx',
        store: './src/store/index.ts',
        index: './src/server.tsx',
      };
  }
};

module.exports = (target, mode, locale = 'base') => {
  const i18n = require('../scripts/i18n')(locale === 'base' ? 'en' : locale);

  const isDeployment = mode === 'deployment';
  const isDevelopment = !isDeployment && mode === 'development';
  const isProduction = isDeployment || mode === 'production';

  const isClient = target === Targets.CLIENT;
  const isServer = target === Targets.SERVER;

  const domain = locale === 'base' ? 'crazysquirrel.ru'
      : `${locale}.crazysquirrel.ru`;

  WebManifest.start_url = `https://${domain}`;

  const postcss = {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        minimize: isProduction,
        ident: 'postcss',
        plugins: [
          'postcss-flexbugs-fixes',
          'postcss-normalize',
          'autoprefixer'
        ]
      },
      sourceMap: isDevelopment
    }
  };

  const css = {
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: isDevelopment
    }
  };

  const image = {
    loader: ImageMinimizerPlugin.loader,
    options: {
      severityError: 'warning', // Ignore errors on corrupted images
      minimizerOptions: {
        plugins: [
          ['gifsicle', {interlaced: true}],
          ['jpegtran', {progressive: true}],
          ['optipng', {optimizationLevel: 5}],
          ['svgo', {plugins: [{removeViewBox: false}]}],
        ],
      },
    },
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    target: getTarget(target),
    externals: isServer ? [
      nodeExternals(),
      path.resolve(__dirname, `../build/${locale}`)
    ] : [],
    cache: isDevelopment,
    bail: isProduction,
    devtool: isDevelopment ? 'source-map' : undefined,
    entry: getEntry(target),
    stats: {
      children: false
    },
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      path: getOutputPath(target, locale),
      publicPath: getPublicPath(target),

      filename: '[name].js',
      chunkFilename: '[name].js',

      library: {
        name: PACKAGE.name,
        type: 'umd'
      }
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '../src')
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.example.*$/,
          use: [
            'cache-loader',
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          use: [
            'babel-loader'
          ],
          include: path.resolve(__dirname, '../src'),
          exclude: /\.example.*$/
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            'ts-loader'
          ],
          include: path.resolve(__dirname, '../src'),
          exclude: /\.example.*$/
        },
        {
          test: /\.css$/,
          use: [
            'cache-loader',
            MiniCssExtractPlugin.loader,
            css,
            postcss
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'cache-loader',
            MiniCssExtractPlugin.loader,
            css,
            postcss,
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, '../src'),
                  ],
                  minimize: isProduction
                },
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            'cache-loader',
            {
              loader: 'html-loader',
            },
            {
              loader: 'markdown-loader',
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            'cache-loader',
            {
              loader: 'url-loader',
              options: {
                limit: 10 * 1024
              }
            },
            image
          ]
        },
        {
          test: /\.svg$/,
          use: [
            'cache-loader',
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true
              }
            },
            image
          ],
          exclude: /fonts\/.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/
        },
        {
          test: /fonts\/.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'cache-loader',
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                esModule: false,
              }
            }
          ]
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'string-replace-loader',
          options: {
            search: /<I18N>(.*?)<\/I18N>/ig,
            replace: (_, p1) => i18n(p1),
          }
        },
      ]
    },
    plugins: [
      ...(!isDeployment ? [new webpack.ProgressPlugin()] : []),
      ...(
          isClient ? [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: 'public/index.html',
              excludeAssets: [
                /inline.(css|js)/
              ]
            }),
            new ExcludeAssetsPlugin(),
          ] : []
      ),
      new webpack.DefinePlugin({
        locale: JSON.stringify(locale === 'base' ? 'en' : locale),
        name: JSON.stringify(PACKAGE.name),
        version: JSON.stringify(PACKAGE.version),
        target: JSON.stringify(target),
        mode: JSON.stringify(mode),
        webmanifest: JSON.stringify(WebManifest),
        'process.env.NODE_ENV': JSON.stringify(
            mode === 'deployment' ? 'production' : mode),
      }),
      new SpriteLoaderPlugin({
        plainSprite: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public/favicons'),
            to: path.resolve(__dirname, `../build/${locale}/favicons`)
          }
        ]
      }),
      new GenerateFile({
        file: '../CNAME',
        content: domain
      }),
      new GenerateFile({
        file: '../robots.txt',
        content: [
          'User-Agent: *',
          `Host: https://${domain}`,
          `Sitemap: https://${domain}/sitemap.xml`,
        ].join('\r\n')
      }),
      new GenerateFile({
        file: '../favicons/site.webmanifest',
        content: JSON.stringify(WebManifest)
      }),
      {
        apply: (compiler) => {
          if (isDeployment && isServer) {
            compiler.hooks.afterEmit.tap('done', () => {
              require('../scripts/ssr').ssr(locale);
              require('../scripts/sitemap').sitemap(locale);
              require('../scripts/yandex').yandex(locale);
              require('../scripts/translate').translate(locale);
            });
          }
        }
      }
    ],
    optimization: {
      minimize: isClient && isProduction,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      }
    },
    performance: {
      hints: !isDeployment && isProduction ? 'warning' : false
    }
  };
};