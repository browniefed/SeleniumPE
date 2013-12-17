var driver = require('../Driver/Driver'),
	AbstractPage = require('./AbstractPage'),
	_ = require('lodash'),
	klass = require('klass');
var Page = klass(function() {

}).methods({
	url: null,
	getUrl: function() {
		return this.url;
	},

	getHash: function() {

	},

	getSearch: function() {

	},

	getUrlToRequest: function() {

	},

	onArrival: function() {

	},

	assertOnPage: function() {

	},
	resize: function(width, height) {
		return function(cb) {
			driver.buildDriver().Window.setSize(width, height).then(function(ret) {
				cb(null, ret);
			})
		}.sync(this)
	}

});

exports = module.exports = Page;