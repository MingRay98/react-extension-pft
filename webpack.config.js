const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtensionReloader = require('webpack-extension-reloader');

module.exports = (env, argv) => {
  const config = {
    devtool: 'sourcemap',
    entry: {
      background: './src/background',
      contentscript: './src/contentscript',
      options: './src/options/options',
      popup: './src/popup/popup',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/manifest.json',
          to: 'manifest.json'
        },
        {
          from: 'src/options/options.html',
          to: 'options.html'
        },
        {
          from: 'src/popup/popup.html',
          to: 'popup.html'
        },
        {
          from: 'src/images',
          to: 'images',
        },
      ]),
    ],
  }

  argv.mode === 'development' ? config.plugins.push(new ExtensionReloader()) : config.plugins.push(new CleanWebpackPlugin());

  return config;

};
