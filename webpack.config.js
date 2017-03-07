var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
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
        use: 'raw-loader'
        // ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: [
        //     { loader: "css-loader", options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } },
        //     { loader: 'postcss-loader', options: { plugins: function () { return [require('precss'),require('autoprefixer')];}} }
        //   ]
        // })
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'raw-loader' },
          { loader: 'sass-loader' }
        ]
        // ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: [
        //     { loader: "css-loader", options: { sourceMap: true } },
        //     { loader: 'sass-loader', options: { sourceMap: true } }
        //   ]
        // })
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
		extensions: [".web.coffee", ".web.js", ".coffee", ".js", ".jsx", ".css", ".scss", ".html"]
	},
  plugins: [
    new HtmlWebpackPlugin({ title: 'Videomeme', template: 'app/index.hbs' }),
    new ExtractTextPlugin({
      filename: "styles.min.css",
      ignoreOrder: true
    })
  ]
};
