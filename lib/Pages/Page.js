var driver = require('../Driver/Driver'),
	AbstractPage = require('./AbstractPage'),
	_ = require('lodash'),
	klass = require('klass');
var Page = klass(function() {
	


}).methods({
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

}).statics({
	url: null
})

exports = module.exports = Page;