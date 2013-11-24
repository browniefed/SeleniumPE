var driver = require('selenium-webdriver'),
webdriver = new driver.Builder().withCapabilities(driver.Capabilities.chrome());

var Driver = function () {
	function getDriver() {
		if (!!webdriver.build) {
			return webdriver = webdriver.build(); 
		} else {
			return webdriver;
		}
	}

	return {
		getDriver: getDriver
	}
}

exports = module.exports = Driver;