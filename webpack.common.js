const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    main: "./src/js/index.js",
    vendor: "./src/js/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
            esModule: false
          },
        },
      },
    ],
  },
};
