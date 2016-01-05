'use strict';

require('./vendor')();
var angular = require('angular');
var appModule = require('../app');
// util.log("bootstrap");
angular.element(document).ready(function() {
	// util.log("appModule.name:" + appModule.name);
	console.log("appModule.name:" + appModule.name);
	angular.bootstrap(document, [appModule.name], {
		strictDi: true
	});
});