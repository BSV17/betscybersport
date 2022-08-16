const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /\.js$/,
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          priority: 20,
          enforce: true
        }
      }
    },
  },
};
