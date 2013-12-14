var driver = require('../Driver/Driver')(),
	PageElement = require('../Pages/PageElement'),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = driver.getDriver().By,
	_ = require('lodash'),
	klass = require('klass'),
	Page = require('../Pages/Page'),
	PageHelper = require('../Pages/PageHelper'),
	Type = require('../Jx/action/TypeAction'),
	JxInspector = require('../JX/JxInspector');

var AbstractPageElement =  PageElement.extend(function(root) {

	}).methods({

		assertIsVisible: function() {
			// return this.getRoot().isDisplayed();
		},

		assertIsHidden: function() {
			// return !this.getRoot().isDisplayed();
		},

		findField: function(fieldName) {
			return JxInspector.findDescendants(By.css('input[name=' + fieldName + ']')); 
		},
		find: function() {
			return JxInspector.find(this.root, elBy);
		},
		findDescendant: function(elBy) {
			return JxInspector.findDescendant(this.root, elBy);
		},
		findDescendants: function(elBy) {
			return JxInspector.findDescendants(this.root, elBy);
		}
	});

exports = module.exports = AbstractPageElement;