var driver = require('../Driver/Driver'),
	AbstractPage = require('./AbstractPage'),
	_ = require('lodash');
var Page = function(url) {

	this.url = url;
	
	this.getUrl = function() {
		return this.url;
	}

	this.getHash = function() {

	}

	this.getSearch = function() {

	}

	this.getUrlToRequest = function() {

	}

	this.onArrival = function() {

	}

	this.assertOnPage = function() {

	}

}

exports = Page;