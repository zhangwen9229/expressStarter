'use strict';
 

fn_getBrowserVersion();
require('./vendor')();
var viewModel = require('../app');

$(function() {
	ko.applyBindings(viewModel);
	$("body").pjax('a', '#pjax-container');
	console.log("ko has bindings.");
});

function fn_getBrowserVersion() {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]:
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	if (Sys.ie) {
		console.log('IE: ' + Sys.ie);
		if (Number(Sys.ie) <= 9) {
			require('html5shiv');
		}
		if (Number(Sys.ie) < 9) {
			require('es5-shim');
		}


	}
	if (Sys.firefox) console.log('Firefox: ' + Sys.firefox);
	if (Sys.chrome) console.log('Chrome: ' + Sys.chrome);
	if (Sys.opera) console.log('Opera: ' + Sys.opera);
	if (Sys.safari) console.log('Safari: ' + Sys.safari);
}