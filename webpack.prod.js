const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoPrefixer = require("autoprefixer");



module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    output: {
        filename: "./js/[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoPrefixer()
                ]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    esModule: false,
                    outputPath: 'images/'
                  }
                },
              },

              {
                test: /\.(scss|sass)$/,
                use: [ // start in reverse order
                    MiniCssExtractPlugin.loader, // 3 step move css into files
                    "css-loader", // 2 step
                    "postcss-loader",
                    "sass-loader" // 1 step
                ]
            },
        ]
    }
});