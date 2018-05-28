let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader", exclude: /node_moduels/},
      {test: /\.css$/, use: ["style-loader", "css-loader"], exclude: /node_modules/},
      {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"], exclude: /node_modules/},
      {test: /\.(jpg|png|gif)$/, use: "url-loader?limit=8192", exclude: /node_modules/},
      {test: /\.vue$/, use: "vue-loader", exclude: /node_modules/},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
};