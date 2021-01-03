const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');

const base = require('./webpack.base.js');

const isDeploy = process.env.GP_DEPLOY === 'true';

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:5].js',
    publicPath: isDeploy ? '/react-userlist' : '/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
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
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};

module.exports = merge(config, base)
