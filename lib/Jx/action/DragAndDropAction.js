var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass'),
	PEWebElement = require('../../Elements/WebElement');


var DragAndDropAction = klass(function() {

}).statics({
	execute: function(Element, Target, cb) {
		var TargetEl = new (Target),
			size = TargetEl.getSize(),
			x = size.width / 2,
			y = size.height / 2;

		var AS = new webdriver.ActionSequence(activeDriver);
		AS.clickAndHold(Element).moveToElement(Target, x + 2, y).moveToElement(Target, x + 1, y).release(Target).perform().then(function() {
			cb(null, true);
		});
	}
})

exports = module.exports = DragAndDropAction;