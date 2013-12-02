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
	JxWaitUntil = require('./JxWaitUntil'),
	Sync = require('sync'),
	webdriver = driver.getDriver();
	
var JxActions = klass(function() {

}).statics({
	executeScript: function() {
		var args = Array.prototype.slice.call(arguments, 0),
			js = args.splice(0,0);

		JxWaitUntil.bodyExists();
		return driver.buildDriver().executeScript(js, args);
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
	type: function(elBy, text) {
		var typeEl = JxInspector.getElFromParam(elBy);
		return JxAction.execute.sync(JxAction, Type, typeEl, text);
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

	}

});

JxActions.clickAndWait();
exports = module.exports = JxActions;