const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./lib/react-1.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new htmlWebpackPlugin()]
}