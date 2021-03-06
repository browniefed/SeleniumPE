var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	WebElement = driver.getDriver().WebElement,
	PEWebElement = require('../Elements/WebElement'),
	JxAction = require('./action/JxAction'),
	Type = require('./action/TypeAction'),
	Click = require('./action/ClickAction'),
	Focus = require('./action/FocusAction'),
	Hover = require('./action/HoverAction'),
	DragAndDrop = require('./action/DragAndDropAction'),
	JxInspector = require('./JxInspector'),
	Sync = require('sync'),
	webdriver = driver.getDriver();
	
var JxActions = klass(function() {

}).statics({
	executeScript: function() {
		var args = Array.prototype.slice.call(arguments, 0);
		return function(args, cb) {
			driver.buildDriver().executeScript.apply(driver.buildDriver(), args).then(function(ret) {
				cb(null, ret);
			})
		}.sync(this, args);
	},
	click: function(elBy, button) {
		var clickEl, b;
		b = button || webdriver.BUTTON.LEFT;
		clickEl = JxInspector.getElFromParam(elBy);

		return JxAction.execute.sync(JxAction, Click, clickEl, b);
	},
	clickAndWait: function() {
	},
	rightClick: function() {
		this.click(elBy, webdriver.BUTTON.RIGHT);
	},
	middleClick: function() {
		this.click(elBy, webdriver.BUTTON.MIDDLE);
	},
	clickOff: function() {
		this.click(JxInspector.getBody());
	},
	type: function() {
		var args = Array.prototype.slice.call(arguments, 0),
		 	typeEl = this.getElFromParam(args.splice(0,1)[0]);
		return JxAction.execute.sync(JxAction, Type, typeEl, args);
	},
	clearAndType: function(elBy, text) {
		var typeEl = JxInspector.getElFromParam(elBy);
		//clear
		this.type(typeEl, text);
	},
	focus: function(elBy) {
		var focusEl = JxInspector.getElFromParam(elBy);
		return JxAction.execute.sync(JxAction, Hover, focusEl);
	},
	hover: function(elBy) {
		var hoverEl = JxInspector.getElFromParam(elBy);
		return JxAction.execute.sync(JxAction, Hover, hoverEl);
	},
	dragAndDrop: function(fromEl, toEl) {

	},
	setCheckBox: function(checkboxEl, setChecked) {

	},
	getElFromParam: function(elBy) {
		var El;
		if(typeof elBy == 'object' && elBy instanceof WebElement) {
			El = elBy;
		} else if (elBy instanceof PEWebElement) {
			El = elBy.getEl();
		} else {
			El = JxInspector.findDescendant(elBy).getEl();
		}
		return El;
	}

});

JxActions.clickAndWait();
exports = module.exports = JxActions;