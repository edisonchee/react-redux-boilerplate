const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [resolve(__dirname, 'src/index.js')],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
        exclude: /node_modules/ },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Redux Boilerplate",
      template: resolve(__dirname, 'src/static/index.html'),
    }),
  ]
}
