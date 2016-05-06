var webpack = require('webpack');
module.exports = {
  entry: {
    profile: "./index.js",
    feed: "./feed.js"
  },
  output: {
    path: './build',
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  }
};
