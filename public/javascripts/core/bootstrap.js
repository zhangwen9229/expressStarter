'use strict';


fn_getBrowserVersion();
require('./vendor')();
// var viewModel = require('../app');
var gPageStack = [];
$(function() {
	fn_koApplyBindings($("body"));

	$("body").pjax('a', '#pjax-container');
	console.log("ko has bindings.");
	if ($.support.pjax) {
		fn_pjaxProcess();
		$.pjax.defaults.maxCacheLength = 0;
	}

});

function fn_pjaxProcess() {
	$(document).on('pjax:complete', function() {
		// $('#loading').hide()

		console.log("pjax:complete");
	}).on('pjax:start', function() {
		console.log("pjax:start");
	}).on('pjax:end', function() {
		fn_koApplyBindings($(this));
		console.log("pjax:end");
	});
}

function fn_koApplyBindings($ele) {
	var $elePageflag = $ele.find('*[pageflag]');
	var pageflag = $elePageflag.attr("pageflag");
	console.log(pageflag);
	if (gPageStack.indexOf(pageflag) >= 0) {
		ko.unapplyBindings($elePageflag);
		// ko.cleanNode($elePageflag[0]);
	};
	// ko.unapplyBindings($elePageflag, true);
	// ko.removeNode($elePageflag[0]);

	var viewModel = require("../" + pageflag + "/index.js");

	ko.applyBindings(viewModel, $elePageflag[0]);
	gPageStack.push(pageflag);
}

ko.unapplyBindings = function($node, remove) {
	// unbind events
	$node.find("*").each(function() {
		$(this).unbind();
	});
	// Remove KO subscriptions and references
	if (remove) {
		ko.removeNode($node[0]);
	} else {
		ko.cleanNode($node[0]);
	}
};

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