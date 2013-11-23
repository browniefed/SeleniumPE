var driver = require('../Driver/Driver');
//Page Helper is just static
var PageHelper = {

	goToPage: function(page) {
		driver.get(page.getUrl());
	},
	getUrlToRequest = function(page) {
		return page.getUrl();
	}
}

exports.PageHelper = PageHelper;