var klass = require('klass'),
	driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver()
	WebElement = activeDriver.WebElement,
	JxActions = require('../Jx/JxActions'),
	JxInspector = require('../Jx/JxInspector'),
	Sync = require('sync');


var PEWebElement = klass(function(el) {
	this.el = el;
}).methods({
	getEl: function() {
		return this.el;
	},
	ELEMENT_KEY: this.ELEMENT_KEY,
	clear: function() {
		this.el.clear();
	},
	click: function() {
		JxActions.click(this.el);
	},
	findElement: function(by) {
		return JxInspector.findDescandant(this.el, by);
	},
	findElements: function() {
		return JxInspector.findDescandants(this.el, by);
	},
	getAttribute: function(attr) {
		return function(attr, cb) {
			this.el.getAttribute(attr).then(function(attr) {
				cb(null, attr);
			});
		}.sync(this, attr);
	},
	getCssValue: function(cssProp) {
		return function(cssProp, cb) {
			this.el.getCssValue(cssProp).then(function(cssProp) {
				cb(null, cssProp);
			});
		}.sync(this, cssProp);
	},
	getInnerHtml: function() {
		return function(cb) {
			this.el.getInnerHtml().then(function(innerHtml) {
				cb(null, innerHtml);
			})
		}.sync(this);
	},
	getLocation: function() {
		return function(cb) {
			this.el.getLocation().then(function(location) {
				cb(null, location);
			})
		}.sync(this);
	},
	getOuterHtml: function() {
		return function(cb) {
			this.el.getOuterHtml().then(function(outerHtml) {
				cb(null, outerHtml);
			})
		}.sync(this);
	},
	getSize: function() {
		return function(cb) {
			this.el.getSize().then(function(size) {
				cb(null, size);
			})
		}.sync(this);
	},
	getTagName: function() {
		return function(cb) {
			this.el.getTagName().then(function(tagName) {
				cb(null, tagName);
			})
		}.sync(this);
	},
	getText: function() {
		return function(cb) {
			this.el.getText().then(function(text) {
				cb(null, text);
			})
		}.sync(this);
	},
	isDisplayed: function() {
		return function(cb) {
			this.el.isDisplayed().then(function(isDisplayed) {
				cb(null, isDisplayed);
			})
		}.sync(this);
	},
	isElementPreset: function() {
		// var args = Array.prototype.slice.call(arguments, 0),
		// 	locator = args.splice(0,0);
		// return function(loc, args, cb) {
		// 	this.el.isElementPreset().then(function(innerHtml) {
		// 		cb(null, innerHtml);
		// 	})
		// }.sync(this, locator, args);
		// Not sure this is posible to shim :(
	},
	isEnabled: function() {
		return function(cb) {
			this.el.isEnabled().then(function(isEnabled) {
				cb(null, isEnabled);
			})
		}.sync(this);
	},
	isSelected: function() {
		return function(cb) {
			this.el.isSelected().then(function(isSelected) {
				cb(null, isSelected);
			})
		}.sync(this);
	},
	sendKeys: function(keys) {
		JxActions.type(this.el, keys);
	},
	submit: function() {
		return function(cb) {
			this.el.submit().then(function(submit) {
				cb(null, submit);
			})
		}.sync(this);
	},
	toWireValue: function() {
		return function(cb) {
			this.el.toWireValue().then(function(wireValue) {
				cb(null, wireValue);
			})
		}.sync(this);
	}
});

exports = module.exports = PEWebElement;