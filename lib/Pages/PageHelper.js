var driver = require('../Driver/Driver').Driver().getDriver();

var PageHelper = {

	goToPage: function(page) {
		driver.get(page.getUrl());
	},
	getUrlToRequest: function(page) {
		return page.getUrl();
	}
}

exports.PageHelper = PageHelper;