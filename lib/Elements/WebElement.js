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
	getCssValue: function() {

	},
	getInnerHtml: function() {

	},
	getLocation: function() {

	},
	getOuterHtml: function() {

	},
	getSize: function() {

	},
	getTagName: function() {

	},
	getText: function() {

	},
	isDisplayed: function() {

	},
	isElementPreset: function() {

	},
	isEnabled: function() {

	},
	isSelected: function() {

	},
	sendKeys: function() {

	},
	submit: function() {

	},
	toWireValue: function() {

	}
});

exports = module.exports = PEWebElement;