const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "./js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
    }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3 step
                    "css-loader", // 2 step
                    "sass-loader" // 1 step
                ],
            },
        ]
    }
});