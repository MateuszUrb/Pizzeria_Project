const path = require("path");


module.exports = {
  entry: {
    main: "./src/js/index.js",
    // vendor: "./src/js/vendor.js",
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
           'file-loader',
        ],
      },
    ],
  },
};