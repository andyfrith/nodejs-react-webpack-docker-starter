const webpack = require('webpack');
const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 4000,
    open: true,
    overlay: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
};
