const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    about: "./src/js/about.js",
    kitchen: "./src/js/kitchen.js",
    crew: "./src/js/crew.js",
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          }
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(|png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: "assets",
              publicPath: "assets/",
            },
          },
          {
            loader: ImageminPlugin.loader,
            options: {
              bail: false,
              cache: false,
              imageOptions: {
                plugins: [
                  ['pngquant', { quality: [0.5, 0.5] }],
                  ['mozjpeg', { quality: 50, progressive: true }],
                  ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
                  ['svgo', {
                    plugins: [
                      { removeViewBox: false, }
                    ]
                  }],

                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/videos/',
            publicPath: 'assets/videos/'
          }
        }
      },

      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
            publicPath: './fonts'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/kitchen.html',
      inject: true,
      chunks: ['kitchen'],
      filename: 'kitchen.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/crew.html',
      inject: true,
      chunks: ['crew'],
      filename: 'crew.html'
    }),
  ]

};