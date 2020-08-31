module.exports = {
  entry: {
    main: "./src/js/index.js",
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
    ],
  },
};