var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    app: "./app/entry.jsx",
    vendor: 'babel-polyfill'
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
        use: { loader: "babel-loader", options: { presets: ["es2015","react"], plugins: ['transform-runtime'] } }
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
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webpack App Production' }),
    new ExtractTextPlugin({ filename: "allstyles.css", ignoreOrder: true }),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
  ],
};
