var Driver = function () {
	var driver = require('selenium-webdriver');
	webdriver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
	function getDriver() {
		return webdriver;
	}

	return {
		getDriver: getDriver
	}
}

exports = Driver;