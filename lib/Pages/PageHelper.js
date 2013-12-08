var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver();

var PageHelper = {

	goToPage: function(page) {
		activeDriver.get(page.getUrl());
	},
	getUrlToRequest: function(page) {
		return page.getUrl();
	},
	closePage: function() {
		activeDriver.quit().then(function() {
			driver.resetDriver();
		})
	}
}

exports = module.exports = PageHelper;