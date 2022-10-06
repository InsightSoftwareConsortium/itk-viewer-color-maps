const webpack = require('webpack');
const path = require('path');

const WebPackBar = require('webpackbar');

const entry = path.join(__dirname, 'iconGenerator.js');
const outputPath = path.join(__dirname,);

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;
const cssRules = require('vtk.js/Utilities/config/dependency.js').webpack.css.rules;

const devServer = {
  noInfo: true,
  stats: 'minimal'
}

module.exports = {
  node: {
    fs: 'empty',
  },
  entry,
  output: {
    path: outputPath,
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
    ].concat(vtkRules, cssRules),
  },
  plugins: [
    new WebPackBar(),
  ],
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..', '..', 'node_modules'),
      path.resolve(__dirname, '..'),
    ],
  },
  performance: {
    maxAssetSize: 15000000,
    maxEntrypointSize: 15000000
  },
  devServer,
};
