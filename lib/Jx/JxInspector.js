var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	activeDriver = driver.buildDriver(),
	JxActions = require('./JxActions'),
	WebElement = driver.getDriver().WebElement;

var JxInspector = klass(function() {

}).statics({
	getBody: function() {

	},
	getVar: function() {

	},
	getHtml: function(by) {
		//WEBELEMNT OR BY
	},
	find: function() {

	},
	getActiveElement: function() {

	},
	findById: function(id) {

	},

	findAncestor: function(el, selector) {
		return JxActions.executeScript("return Ext.get(arguments[0]).up(arguments[1]).dom;", el, selector);
	},
	findDescendant: function(root, by) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else {
			by = root;
		}
		return useAsRoot.findElement(by);
	},
	findDescendants: function(root, by) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else {
			by = root;
		}
		return useAsRoot.findElements(by);
	}
})

exports = module.exports = JxInspector;