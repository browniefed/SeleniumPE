var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	WebElement = driver.getDriver().WebElement;
	
var JxActions = klass(function() {

}).methods({
	executeScript: function(js) {
		//get args
	},
	click: function() {

	},
	clickAndWait: function() {

	},
	rightClick: function() {

	},
	clickOff: function() {

	},
	type: function(elBy, text) {
		if (typeof elBy == 'function' && elBy instanceof WebElement) {
			// Type

		}
	},
	clearAndType: function() {

	},
	focus: function() {

	},
	hover: function() {

	},
	dragAndDrop: function(fromEl, toEl) {

	},
	setCheckBox: function(checkboxEl, setChecked) {

	}

})

exports = module.exports = JxActions;