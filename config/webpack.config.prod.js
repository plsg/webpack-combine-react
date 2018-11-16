/* eslint-disable */
const merge = require('webpack-merge');
// plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
// Configs
const baseConfig = require('./webpack.config.base');

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                // // **** vendor code chunk ****
                // runtimeChunk: 'single',
                // splitChunks: {
                //     cacheGroups: {
                //         vendor: {
                //             test: /[\\/]node_modules[\\/]/,
                //             name: 'vendors',
                //             chunks: 'all'
                //         }
                //     }
                // },
                minimizer: [new UglifyJsPlugin()],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' })
            ],
        },
    ]);
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env));
}