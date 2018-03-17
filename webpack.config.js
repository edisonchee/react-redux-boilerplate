const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [resolve(__dirname, 'src/index.js')],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Boilerplate",
      template: resolve(__dirname, 'src/static/index.html'),
    }),
  ],
};
