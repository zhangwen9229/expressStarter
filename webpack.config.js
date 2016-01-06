var path = require('path'),
    webpack = require('webpack');
// var ignoreFiles = new webpack.IgnorePlugin(/\.\/knockout.js$/);
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
        root: [path.join(__dirname, "bower_components")],
        modulesDirectories: ['node_modules', 'bower_components'],
        // 现在可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.json', '.jsx']
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:9001',
            'webpack/hot/dev-server',
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
            test: /\.css$/,
            loader: "style!css?sourceMap"
        }, {
            test: /\.jsx?$/,
            // exclude: /bower_components/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass?sourceMap'
        }, {
            test: /\.js$/,
            loader: 'babel!jshint',
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
        // ignoreFiles,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],
    devtool: 'sourcemap',
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: __dirname
    }
};