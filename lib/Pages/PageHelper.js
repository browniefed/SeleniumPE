var driver = require('../Driver/Driver')(),
	activeDriver;

var PageHelper = {

	goToPage: function(page) {
		activeDriver = driver.buildDriver();
		driver.buildDriver().get(page.getUrl());
	},
	getUrlToRequest: function(page) {
		return page.getUrl();
	},
	closePage: function() {
		activeDriver.quit().then(function() {
			driver.resetDriver();
		});
	}
}

exports = module.exports = PageHelper;