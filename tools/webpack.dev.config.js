'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-maps',
  entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '../demo/index')],
  output: {
    path: path.resolve(__dirname, '../demo'),
    publicPath: '/demo/',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    filename: 'demo.js',
    library: 'CarbonComponents',
    libraryTarget: 'var',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
