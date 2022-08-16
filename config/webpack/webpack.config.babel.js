require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const glob = require('glob');

const options = require('./webpack.options');
const pluginsConfig = require('./webpack.plugins');
const modulesConfig = require('./webpack.modules');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = merge(options.env == 'development' ? devConfig : prodConfig, {
  context: path.resolve(__dirname, '../../'),
  entry: {
    'index': 'index.js',
    ...glob.sync('templates/**/!(_*|*.global).js', {cwd:path.resolve(__dirname, '../../')}).reduce((obj, f) => ({...obj, [f.replace(/^(templates\/)/,'').replace(/(\.js)$/,'')]:f }), {})
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(process.cwd(), 'web/static/')
  },
  mode: options.env,
  cache: false,
  plugins: pluginsConfig,
  module: modulesConfig,
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['.', 'node_modules'],
  },
  performance: {
    hints: 'warning'
  },
  stats: options.stats
});
