var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
		rules: [
			{
        test: /\.coffee$/,
        loader: "coffee-loader" },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
		]
	},
  resolve: {
		extensions: [".web.coffee", ".web.js", ".coffee", ".js", ".css", ".html"]
	},
  plugins: debug ? [
    new HtmlWebpackPlugin({ title: 'Webpack App' }),
    new ExtractTextPlugin({
      filename: "allstyles.css",
      ignoreOrder: true
    });
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
