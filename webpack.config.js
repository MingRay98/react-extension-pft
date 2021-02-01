const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true
  },
  entry: {
    background: './src/background',
    contentscript: './src/contentscript',
    options: './src/options',
    popup: './src/popup',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: __dirname + '/src/',
        to: __dirname + '/dist',
        ignore: '*.js',
      },
    ])
  ],
});
