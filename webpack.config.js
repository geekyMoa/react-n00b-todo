//var path = require('path');
//var webpack = require('webpack');
//
//module.exports = {
//  module : {
//    loaders: [
//      {
//        loader: 'babel',
//        include: [
//          path.resolve(__dirname, "src"),
//        ],
//        test: /\.js?$/,
//        exclude: /(node_modules|bower_components)/,
//        query: {
//          plugins: ['transform-runtime'],
//          presets: ['es2015', 'react', 'stage-0']
//        }
//      }
//    ]
//  },
//  output : {
//    filename: 'bundle.js'
//  },
//  entry : [
//      './src/index.js'
//  ],
//  watch: true,
//  colors: true,
//  progress: true
//}

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
