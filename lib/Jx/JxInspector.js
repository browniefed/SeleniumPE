var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	activeDriver = driver.buildDriver(),
	JxActions = require('./JxActions'),
	WebElement = driver.getDriver().WebElement,
	PEWebElement = require('../Elements/WebElement'),
	By = driver.getDriver().By,
	_ = require('lodash');

var JxInspector = klass(function() {

}).statics({
	getBody: function() {
		return this.findDescendant(By.tagName('body'));
	},
	getVar: function() {

	},
	getHtml: function(by) {
		//WEBELEMNT OR BY
	},
	find: function(elBy) {
		var retElements = this.findDescendants(elBy);
		return (retElements.length == 1 ? retElements[0] : retElements)
	},
	getActiveElement: function() {

	},
	findById: function(root, id) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (root instanceof PEWebElement) {
			useAsRoot = root.getEl();
		} else {
			id = root;
		}
		return PEWebElement(useAsRoot.findElement(By.id(id)));
	},

	findAncestor: function(el, selector) {
		return JxActions.executeScript("return Ext.get(arguments[0]).up(arguments[1]).dom;", el, selector);
	},
	findDescendant: function(root, elBy) {
		var useAsRoot = activeDriver;
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (typeof root == 'function' && root instanceof PEWebElement) {
			useAsRoot = root.getEl();
		} else if (!elBy) {
			elBy = root;
		} else {
			useAsRoot = root;
		}
		if (this.isElementPresent(useAsRoot, elBy)) {
			return new PEWebElement(useAsRoot.findElement(elBy));
		} else {
			return false;
		}

	},
	findDescendants: function(root, elBy) {
		var useAsRoot = activeDriver, eles, elesWrapped = [];
		if (typeof root == 'function' && root instanceof WebElement) {
			useAsRoot = root;
		} else if (root instanceof PEWebElement) {
			useAsRoot = root.getEl();
		} else if (!elBy) {
			elBy = root;
		} else {
			useAsRoot = root;
		}
		if (this.isElementPresent(useAsRoot, elBy)) {
			var pel = new PEWebElement(useAsRoot),
				eles = pel.findElements(elBy);
			_(eles).each(function(ele) {
				elesWrapped.push(new PEWebElement(ele));
			});
			return elesWrapped;
		} else {
			return false;
		}

	},
	isElementPresent: function(root, elBy) {
		var isElePres =  function(by, cb) {
			root.isElementPresent(by).then(function(isElementPresent) {
				cb(null, isElementPresent);
			});
		}.sync(this, elBy);

		return isElePres;
	}
})

exports = module.exports = JxInspector;