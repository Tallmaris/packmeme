var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: "style!css" },
            { test: /\.coffee$/, use: "coffee-loader" },
            { test: /\.js$/, use: "babel-loader" }
        ]
    },
    resolve: {
      extensions: [".js", ".coffee"]
    },
    plugins: [
      new HtmlWebpackPlugin("index.html")
    ]
};
