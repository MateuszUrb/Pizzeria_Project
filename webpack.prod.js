const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "./js/[name].[contentHash].bundle.js",
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
],
module: {
    rules: [{
        test: /\.(scss|sass)$/,
        use: [ // start in reverse order
            MiniCssExtractPlugin.loader, // 3 step move css into files
            "css-loader", // 2 step
            "sass-loader" // 1 step
        ]
    }, ]
}

});