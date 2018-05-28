let path = require("path");

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve('./dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
      {test: /\.css$/, use: ["style-loader", "css-loader"], exclude: /node_module/},
      {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"], exclude: /node_module/},
      {test: /\.(jpg|png|gif)/, use: "url-loader?limit=8192", exclude: /node_module/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};