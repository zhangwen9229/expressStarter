var path = require('path'),
    webpack = require('webpack');

// PATHS
var PATHS = {
    app: __dirname,
    publicPath: __dirname + '/dist/',
    bower: __dirname + '/bower_components'
};

module.exports = {
    // modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "../node_modules"],
    context: PATHS.app,
    resolve: {
        // 现在可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.json', '.jsx']
    },
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:9001',
            __dirname + '/public/javascripts/core/bootstrap'
        ]
    },
    output: {
        path: PATHS.app + '/dist/',
        filename: "bundle.js", //打包后的名字,
        publicPath: "http://localhost:9001/assets/"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            // exclude: /bower_components/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style!css?sourceMap"
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: __dirname
    }
};