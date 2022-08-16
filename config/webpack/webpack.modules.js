const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const options = require('./webpack.options');
const path = require('path');

module.exports = {
  rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      exclude: /vendor/,
      loader: 'eslint-loader'
    },
    {
      test: /\.((scss|js)$)/,
      enforce: 'pre',
      loader: 'import-glob-loader'
    },
    {
      test: /\.js$/,
      exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js?$/, /vendor/],
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(scss)$/,
      exclude: [/node_modules/, /vendor/],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            minimize: options.env == 'development' ? false : true,
            sourceMap: options.env == 'development' ? true : false,
            importLoaders: 3,
            url: false //https://github.com/postcss/postcss-loader/issues/160#issuecomment-271082726  fix for using `.png, .jpg, .svg` as background images
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')()],
            sourceMap: options.env == 'development' ? true : false
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: options.env == 'development' ? true : false,
            precision: 8
          }
        },
      ]
    }
  ]
};
