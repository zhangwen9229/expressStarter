'use strict';

// var angular = require('angular'),
//     app = angular.module('lazyApp', [
//         require('angular-ui-router'),
//         // @TODO: It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
//         (() => {
//             require('oclazyload');
//             return 'oc.lazyLoad';
//         })(),

//           uncomment to move msg-store to bundle.js only instead
//           of putting it in both: 3.bundle.js and 4.bundle.js

//         //require('commons/msg-store').name,
//         require('./homepage/home.routing').name,
//         // require('./pages/messages/messages.routing').name,
//     ]);

var viewModel = require("./" + $("body").attr("pageflag") + "/index.js");
// var viewModel = require("./homepage/index");
module.exports = viewModel;