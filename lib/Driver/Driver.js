var Driver = function () {
	var driver = require('selenium-webdriver');
	webdriver = new driver.Builder().withCapabilities(driver.Capabilities.chrome()).build();
	function getDriver() {
		return webdriver;
	}

	return {
		getDriver: getDriver
	}
}


exports = module.exports = Driver;