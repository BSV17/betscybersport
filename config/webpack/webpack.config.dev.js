require('dotenv').config();
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

// used or measuring the webpack build
const smp = new SpeedMeasurePlugin({ disable: !(process.env.WEBPACK_MEASURE == 'true') });

module.exports = smp.wrap({
  devtool: 'eval',
  watch: true,
  watchOptions: {
    ignored: [/node_modules/, /vendor/],
    aggregateTimeout: 300
  },
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.HOST || 'localhost',
      port: process.env.WEBPACK_PORT || 3000,
      proxy: 'http://'+(process.env.HOST || 'localhost')+':'+(process.env.CRAFT_PORT || 3000)+'/',
      files: [path.join(process.cwd(), '/public/static/'), path.join(process.cwd(), '/public/assets/')],
      open: false,
      reloadOnRestart: true,
      notify: false,
      // reloadDelay: 2000,
      localOnly: true,
      ghostMode: false,
      logPrefix: process.env.SYSTEM_NAME,
      logLevel: 'info'
    })
  ]
});
