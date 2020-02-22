const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const autoPrefixer = require("autoprefixer");
const webpack = require("webpack");

const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        filename: "./js/[name].[contentHash].bundle.js",
        sourceMapFilename: 'sourceMap/[file].map',
        path: path.resolve(__dirname, "dist"),
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
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',

                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[contentHash].css",
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
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
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
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                  loader: "file-loader?limit=8192",
                  options: {
                    name: "[hash].[name].bundle.[ext]",
                    publicPath: './',
                    outputPath: "images/"
                  }
                },
              },
        ]
    }
});