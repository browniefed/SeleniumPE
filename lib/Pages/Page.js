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

	}

});

exports = module.exports = Page;