var driver = require('../Driver/Driver').Driver().getDriver();
console.log(driver);

var PageHelper = {

	goToPage: function(page) {
		driver.get(page.getUrl());
	},
	getUrlToRequest: function(page) {
		return page.getUrl();
	}
}

exports.PageHelper = PageHelper;