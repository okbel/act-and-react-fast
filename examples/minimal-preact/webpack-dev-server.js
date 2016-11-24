const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const path = require('path');

const env = {
  dev: process.env.NODE_ENV
};

const devServerConfig = {
  contentBase: path.join(__dirname, 'src/'),
  historyApiFallback: {
    disableDotRule: true
  },
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);

server.listen(3000, 'localhost');