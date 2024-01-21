const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'deploy'),
    publicPath: '/deploy/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|mp4|webm)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1158192, 
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'deploy'),
    },
    open: true,
    port: 8080,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from:'src/assets/',
          to:'assets/'
        },
        {
          from: 'node_modules/three/build/three.module.js',
          to: 'assets/',
        },
        {
          from: 'node_modules/three/examples/jsm/loaders/',
          to: 'assets/',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
