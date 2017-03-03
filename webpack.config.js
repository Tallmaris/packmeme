var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    app: "./js/index.js"
  },
  output: {
    path: __dirname + "/js",
    filename: "[name].min.js"
  },
  module: {
		rules: [
			{
        test: /\.coffee$/,
        loader: "coffee-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: { loader: "css-loader", options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } }
        })
      },
      {
        test: /\.hbs$/, loader: "handlebars-loader"
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
		extensions: [".web.coffee", ".web.js", ".coffee", ".js", ".css", ".html"],
    // alias: {
    //    handlebars: 'handlebars/dist/handlebars.min.js'
    // }
	},
  plugins: debug ? [
    new HtmlWebpackPlugin({ title: 'Webpack App' }),
    new ExtractTextPlugin({
      filename: "allstyles.css",
      ignoreOrder: true
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
