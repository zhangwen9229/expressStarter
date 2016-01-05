var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
    // 使用9001端口
    app.use('/assets', proxy(url.parse('http://localhost:9001/assets')));

    var server = new WebpackDevServer(webpack(config), {
        contentBase: __dirname,
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: config.output.publicPath,//'/assets/',
        stats: {
            colors: true
        },
        // historyApiFallback: true
    }).listen(9001, 'localhost', function() {
        console.log('socketio listen 9001')
    });
}

//     var webpack = require('webpack');
//     var WebpackDevServer = require('webpack-dev-server');
//     var config = require('../webpack.config.js');

// module.exports = function(app) {
//     new WebpackDevServer(webpack(config), {
//         contentBase: __dirname,
//         publicPath: config.output.publicPath,
//         hot: true,
//         noInfo: false,
//         historyApiFallback: true
//     }).listen(9002, 'localhost', function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Listening at localhost:9002');
//     });
// }