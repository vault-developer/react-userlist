const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  //https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/281
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      //https://github.com/webpack/webpack/issues/11467
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        },
        include: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer']
                ],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              }
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader']
      }
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ]
    })
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src')
    }
  }
};
