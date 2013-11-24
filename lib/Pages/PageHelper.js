var driver = require('../Driver/Driver')().buildDriver();

var PageHelper = {

	goToPage: function(page) {
		driver.get(page.getUrl());
	},
	getUrlToRequest: function(page) {
		return page.getUrl();
	},
	closePage: function() {
		driver.quit();
	}
}

exports = module.exports = PageHelper;