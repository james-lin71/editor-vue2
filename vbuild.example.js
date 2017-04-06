var path = require('path');

module.exports = {
  entry: 'example/index.js',
  dist: 'dist-example',
  webpack: {
    output: {
      path: path.resolve(__dirname, 'dist-example/'),
      publicPath: ""
    }
  },
  filename: {
    js: '[name].js',
    css: '[name].css'
  },
  // publicPath: "",
  // path
  html: {
    title: 'Vue2-Editor'
  }
}
