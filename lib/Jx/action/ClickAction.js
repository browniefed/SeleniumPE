var JxAction = require('./JxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	webdriver = driver.getDriver(),
	klass = require('klass');



var ClickAction = klass(function() {

}).statics({
	execute: function(Element, b, cb) {
		var AS = new webdriver.ActionSequence(activeDriver);
		var b = b || webdriver.BUTTON.LEFT;
		AS.click(Element, b).perform().then(function() {
			cb(null, true);
		});
	}
});

exports = module.exports = ClickAction;