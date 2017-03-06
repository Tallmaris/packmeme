var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    app: "./app/entry.jsx"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].min.js"
  },
  module: {
		rules: [
			{ test: /\.coffee$/, loader: "coffee-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } },
            { loader: 'postcss-loader', options: { plugins: function () { return [require('precss'),require('autoprefixer')];}} }
          ]
        })
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: { loader: "babel-loader", options: { presets: ["es2015","react"] } }
      },
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader"//, options: { limit: 100 }
        }
      }
		]
	},
  resolve: {
		extensions: [".web.coffee", ".web.js", ".coffee", ".js", ".jsx", ".css", ".html"]
	},
  plugins: debug ? [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({ title: 'Videomeme', template: 'app/index.hbs' }),
    new ExtractTextPlugin({
      filename: "styles.min.css",
      ignoreOrder: true
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
