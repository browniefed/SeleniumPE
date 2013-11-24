var driver = require('../Driver/Driver')(),
	PageElement = require('../Pages/PageElement'),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = activeDriver.By;

var AbstractPageElement = function(root) {

	this.assertIsVisible = function() {

	}

	this.assertIsHidden = function() {

	}

	this.findField = function(fieldName) {

	}

	this.findDescendant = function(by) {

	}

	this.findDescendants = function(by) {

	}
}

exports = module.exports = _.extend(PageElement, AbstractPageElement);