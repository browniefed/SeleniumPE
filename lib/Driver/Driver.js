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

	return {
		buildDriver: buildDriver,
		getDriver: getDriver
	}
}

exports = module.exports = Driver;