const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    core: path.join(__dirname, 'src/client'),
  },
  output: {
    path: path.join(__dirname, 'build/assets'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=100000',
    }],
  },
}
