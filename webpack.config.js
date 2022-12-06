const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';

module.exports = {
  mode: NODE_ENV,
  devtool: IS_DEVELOPMENT ? 'inline-cheap-module-source-map' : false,
  entry: {
    bundle: ['./src/ts/index.ts'],
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ]
  }
}