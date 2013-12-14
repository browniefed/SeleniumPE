var klass = require('klass'),
	driver = require('../Driver/Driver')(),
	WebElement = driver.buildDriver().WebElement,
	Sync = require('sync');


var PEWebElement = klass(function(el) {
	this.el = el;
}).methods({
	getEl: function() {
		return this.el;
	},
	clear: function() {
		return function(cb) {
			this.el.clear().then(function() {
				cb(null, true);
			});
		}.sync(this);
	},
	click: function() {
		return function(cb) {
			this.el.click().then(function() {
				cb(null, true);
			});
		}.sync(this);	
	},
	findElement: function(elBy) {
		return function(by, cb) {
			this.el.findElement(by).then(function(element) {
				cb(null, element);
			})
		}.sync(this, elBy);
	},
	findElements: function(elBy) {
		return function(by, cb) {
			this.el.findElements(by).then(function(elements) {
				cb(null, elements);
			})
		}.sync(this, elBy);	
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
			var call = this.el.getInnerHtml();
			call.then(function(innerHtml) {
				cb(null, innerHtml);
				return;
			});

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
	isElementPreset: function(elBy) {
		return function(cb) {
			this.el.isElementPreset(elby).then(function(isElementPreset) {
				cb(null, isElementPreset);
			});
		}.sync(this);
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
	sendKeys: function() {
		var args = Array.prototype.slice.call(arguments, 0);
		// return function(keys, cb) {
		// 	this.el.sendKeys.apply(driver.buildDriver(), args).then(function() {
		// 		cb(null, true);
		// 	});
		// }.sync(this);
		args.splice(0, 0, this.el.sendKeys);
		return PEWebElement.callMethodOnEl.apply(this,args);
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
}).statics({
	callMethodOnEl: function() {
		var args = Array.prototype.slice.call(arguments, 0),
			fn = args.slice(0,1)[0];
		return function(cb) {
			fn.apply(driver.buildDriver(), args).then(function() {
				var retArgs = Array.prototype.slice.call(arguments, 0);
				retArgs.splice(0,0,null);
				cb.apply(cb, retArgs);
			})
		}.sync(this);
	}
})

exports = module.exports = PEWebElement;