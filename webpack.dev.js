const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const base = require('./webpack.base.js');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    port: 7777,
    hot: true,
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')]
          }
        },
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader'],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
};

module.exports = merge(config, base)
