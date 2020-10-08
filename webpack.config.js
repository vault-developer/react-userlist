const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDeploy = process.env.GP_DEPLOY === 'true';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: isDeploy ? '/react-userlist' : '/',
    filename: isProd ? '[name].[contenthash:5].js' : '[name].js',
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    port: 7777,
    hot: true,
    stats: 'minimal'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              !isProd && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      isProd && new TerserPlugin(),
      isProd && new OptimizeCSSAssetsPlugin({})
    ].filter(Boolean)
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
      ],
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    isProd && new CleanWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '#helpers': path.resolve(__dirname, 'src/helpers/'),
      '#redux': path.resolve(__dirname, 'src/redux/'),
      '#components': path.resolve(__dirname, 'src/components/'),
    }
  }
};
