const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin({
      dry: false, /* Always set this to true when testing new config */
      verbose: true,
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), '/public/static/**/*')],
  }),
  new MiniCssExtractPlugin({
    filename: 'css/index.css'
  }),
  new StyleLintPlugin({
    syntax: 'scss'
  })
];
