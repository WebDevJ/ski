const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require("@babel/register");

// Webpack Configuration
const config = {

    //context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devtool: "source-map",

    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.png$/,
                use: ['file-loader'],
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'Ski',
            template: 'src/index.html'
        }),
        new CopyPlugin([
            {
                from: 'img/*',
                to: ''
            },
        ])
    ],
};

module.exports = config;