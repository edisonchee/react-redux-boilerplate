const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [resolve(__dirname, 'src/index')],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
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
