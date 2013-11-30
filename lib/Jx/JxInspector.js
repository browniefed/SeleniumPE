var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	activeDriver = driver.buildDriver(),
	JxActions = require('./JxActions'),
	WebElement = driver.getDriver().WebElement,
	SPEWebElement = require('../Elements/WebElement'),
	By = driver.getDriver().By,
	_ = require('lodash');

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
	findById: function(root, id) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (root instanceof SPEWebElement) {
			useAsRoot root.getEl();
		} else {
			id = root;
		}
		return SPEWebElement(useAsRoot.findElement(By.id(id)));
	},

	findAncestor: function(el, selector) {
		return JxActions.executeScript("return Ext.get(arguments[0]).up(arguments[1]).dom;", el, selector);
	},
	findDescendant: function(root, elBy) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (root instanceof SPEWebElement) {
			useAsRoot root.getEl();
		} else {
			elBy = root;
		}
		return SPEWebElement(useAsRoot.findElement(by));
	},
	findDescendants: function(root, elBy) {
		var useAsRoot = activeDriver, eles, elesWrapped = [];
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (root instanceof SPEWebElement) {
			useAsRoot = root.getEl();
		} else {
			elBy = root;
		}
		var eles = useAsRoot.findElements(by);
		_(eles).each(function(ele) {
			elesWrapped.push(new SPEWebElement(ele));
		});
		return elesWrapped;
	}
})

exports = module.exports = JxInspector;