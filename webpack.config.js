module.exports = {
  entry: "./public/javascripts/getting_started/entry.js",
  output: {
    path: __dirname,
    filename: "./public/javascripts/getting_started/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

