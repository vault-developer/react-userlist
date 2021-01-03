const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { merge } = require('webpack-merge');

const base = require('./webpack.base.js');

const isDeploy = process.env.GP_DEPLOY === 'true';

const config = {
  mode: 'production',
  devtool: undefined,
  output: {
    filename: '[name].[contenthash:5].js',
    publicPath: isDeploy ? '/react-userlist' : '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader],
      }
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};

module.exports = merge(config, base)
