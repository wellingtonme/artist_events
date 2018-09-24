const webpack = require('webpack');
const config = require('config');

const { APP_KEY } = process.env;

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        BASE_URL: JSON.stringify(config.get('BASE_URL')),
        ARTISTS_SERVICE: JSON.stringify(config.get('SERVICES.ARTISTS')),
        EVENTS_SERVICE: JSON.stringify(config.get('SERVICES.EVENTS')),
        APP_KEY: JSON.stringify(APP_KEY),
      }),
    ],
  },
};
