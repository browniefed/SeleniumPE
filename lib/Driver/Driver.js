var Driver = function () {
	var webdriver = require('selenium-webdriver');

	function getDriver() {
		return webdriver;
	}

	return {
		getDriver: getDriver
	}
}

exports.Driver = Driver;