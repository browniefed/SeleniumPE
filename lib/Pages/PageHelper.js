var driver = require('../Driver/Driver');
var PageHelper = function(page) {

	this.page = page;

	this.goToPage = function() {
		driver.get(this.page.getUrl());
	}

	this.getUrlToRequest = function() {
		return this.page.getUrl();
	}
}

exports.PageHelper = PageHelper;