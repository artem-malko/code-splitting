const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },

  output: {
    path: path.resolve('./dist/'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es6',
              jsx: 'automatic',
              tsconfigRaw: require('./tsconfig.json'),
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: ['./node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    // It is necessary, cause esbuild-loader does not support React's new JSX transform
    // So, we can not write something like this: import React from 'react'; while using raw esbuild-loader
    // To fix the problem we can provide React via webpack.ProvidePlugin
    // https://github.com/privatenumber/esbuild-loader/issues/184
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
