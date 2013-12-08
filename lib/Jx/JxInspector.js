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
	getHtml: function(root, elBy) {
		return JxInspector.findDescendant(root, elBy).getOuterHtml();
	},
	find: function(elBy) {
		var retElements = this.findDescendants(elBy);
		return (retElements.length == 1 ? retElements[0] : retElements)
	},
	getActiveElement: function() {

	},
	findById: function(root, id) {
		var search = JxInspector.getRootAndBy(root, elBy);
		return PEWebElement(search.root.findElement(By.id(search.by)));
	},

	findAncestor: function(el, selector) {
		return JxActions.executeScript("return Ext.get(arguments[0]).up(arguments[1]).dom;", el, selector);
	},
	findDescendant: function(root, elBy) {
		var search = JxInspector.getRootAndBy(root, elBy);
		if (this.isElementPresent(search.root, search.by)) {
			return new PEWebElement(search.root.findElement(search.by));
		} else {
			return false;
		}

	},
	findDescendants: function(root, elBy) {
		var eles, elesWrapped = [];
		var search = JxInspector.getRootAndBy(root, elBy);
		if (this.isElementPresent(search.root, search.by)) {
			var pel = new PEWebElement(search.root),
				eles = pel.findElements(search.by);
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
	},
	getRootAndBy: function(root, elBy) {
		var ret = {root: activeDriver};
		if (typeof root == 'function' && root instanceof PEWebElement) {
			ret.root = root.getEl();
		} else if (!elBy) {
			root.by = root;
		} else {
			ret.root = root;
			ret.by = elBy;
		}
		return ret;
	}
})

exports = module.exports = JxInspector;