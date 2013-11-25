var driver = require('../Driver/Driver')(),
	PageElement = require('../Pages/PageElement'),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = driver.getDriver().By,
	_ = require('lodash'),
	klass = require('klass'),
	sync = require('sync');

var AbstractPageElement =  PageElement.extend(function(root) {

	}).methods({

		assertIsVisible: function() {

		},

		assertIsHidden: function() {

		},

		findField: function(fieldName) {
			return this.findDescendants(By.css('input[name=' + fieldName + ']')); 
		},

		findDescendant: function(by) {
			var elements = this.findDescendants(by);
			if (Array.isArray(elements)) {
				return elements[0];
			} else {
				return elements;
			}
		},

		findDescendants: function(by) {
			return activeDriver.findElement(this.getRoot(), by);
		}
	});

exports = module.exports = AbstractPageElement;