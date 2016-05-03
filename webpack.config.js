var path = require('path');
var webpack = require('webpack');

module.exports = {
  module : {
    loaders: [
      {
        loader: 'babel',
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  output : {
    filename: 'bundle.js'
  },
  entry : [
      './src/index.js'
  ]
}
