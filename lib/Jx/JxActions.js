var driver = require('../Driver/Driver')(),
	klass = require('klass'),
	WebElement = driver.getDriver().WebElement,
	PEWebElement = require('../Elements/Element'),
	JxAction = require('./action/JxAction'),
	Type = require('./action/TypeAction'),
	Click = require('./action/ClickAction'),
	Focus = require('./action/FocusAction'),
	DragAndDrop = require('./action/DragAndDropAction'),
	JxWaitUntil = require('./JxWaitUntil'),
	Sync = require('sync');
	
var JxActions = klass(function() {

}).statics({
	executeScript: function() {
		var args = Array.prototype.slice.call(arguments, 0),
			js = args.splice(0,0);

		JxWaitUntil.bodyExists();
		return driver.buildDriver().executeScript(js, args);
	},
	click: function(elBy) {
		var clickEl;
		if(typeof elBy == 'object' && elBy instanceof WebElement) {
			clickEl = elBy;
		} else if (elBy instanceof PEWebElement) {
			clickEl = elBy.getEl();
		} else {
			clickEl = JxInspector.findDescendant(elBy);
		}
		//JxAction execute click
		//JxAction.execute(Click, clickEl);
		return JxAction.execute.sync(null, Click, clickEl);
	},
	clickAndWait: function() {

	},
	rightClick: function() {

	},
	clickOff: function() {
		console.log(this);
	},
	type: function(elBy, text) {
		if (typeof elBy == 'object' && elBy instanceof WebElement) {
			Type.type(elBy, text);
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

WebElement element = JxInspector.find(by);
        if (element == null) {
            throw new NullElementException("Couldn't find element to click by: " + by);
        }
        click(element);