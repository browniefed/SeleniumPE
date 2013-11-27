var driver = require('../Driver/Driver')(),
	PageElement = require('../Pages/PageElement'),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = driver.getDriver().By,
	_ = require('lodash'),
	klass = require('klass'),
	Page = require('../Pages/Page'),
	PageHelper = require('../Pages/PageHelper'),
	Type = require('../Jx/action/TypeAction');

var AbstractPageElement =  PageElement.extend(function(root) {

	}).methods({

		assertIsVisible: function() {
			return this.getRoot().isDisplayed();
		},

		assertIsHidden: function() {
			return !this.getRoot().isDisplayed();
		},

		findField: function(fieldName) {
			return this.findDescendants(By.css('input[name=' + fieldName + ']')); 
		},

		findDescendant: function(by) {
			return this.getRoot().findElement(by);
		},

		findDescendants: function(by) {
			return this.getRoot().findElements(by);
		}
	});

exports = module.exports = AbstractPageElement;