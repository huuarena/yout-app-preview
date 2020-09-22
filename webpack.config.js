const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name]_[hash].[ext]',
            //                 outputPath: 'assets/images',
            //                 publicPath: '../images',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main-[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
