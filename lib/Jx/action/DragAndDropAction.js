var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');


var DragAndDropAction = klass(function() {

}).statics({
	execute: function(Element, Target, cb) {
		var AS = new webdriver.ActionSequence(activeDriver);
		AS.focus(Element, b).perform().then(function() {
			cb(null, true);
		});
	}
})

exports = module.exports = DragAndDropAction;

        Dimension s = target.getSize();
        int x = s.getWidth() / 2;
        int y = s.getHeight() / 2;

        Actions a = new Actions(ThreadWebDriver.get());
        a.clickAndHold(source);
        a.moveToElement(target, x + 2, y);
        a.moveToElement(target, x + 1, y);
        a.release(target);
        a.perform();