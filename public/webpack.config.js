var path = require('path'),
    webpack = require('webpack');

// PATHS
var PATHS = {
    app: __dirname,
    publicPath: __dirname + '/dist/',
    bower: __dirname + '/bower_components'
};

module.exports = {
    context: PATHS.app,
    entry: {
        app: [
            __dirname + '/javascripts/core/bootstrap.js'
        ]
    },
    output: {
        path: PATHS.app + '/dist/',
        filename: "bundle.js", //打包后的名字
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css!autoprefixer?sourceMap"
        }, {
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass?sourceMap'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel!jshint?sourceMap',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
    ],
    devtool: 'source-map',
    // devServer: {
    //     historyApiFallback: true,
    //     stats: {
    //         chunkModules: false,
    //         colors: true
    //     },
    //     contentBase: __dirname
    // }
};