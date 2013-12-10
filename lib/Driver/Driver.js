var driver = require('selenium-webdriver'),
webdriver = new driver.Builder().withCapabilities(driver.Capabilities.chrome()),
useDriver = webdriver;
var Driver = function () {
	function  buildDriver() {
		if (!!useDriver.build) {
			return useDriver = webdriver.build(); 
		} else {
			return useDriver;
		}
	}
	
	function getDriver() {
		return driver;
	}

	function resetDriver() {
		webdriver = new driver.Builder().withCapabilities(driver.Capabilities.chrome()),
		useDriver = webdriver;
	}

	return {
		buildDriver: buildDriver,
		getDriver: getDriver,
		resetDriver: resetDriver
	}
}

exports = module.exports = Driver;