var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');

var FocusAction = klass(function() {

}).statics({
	execute: function(Element, cb) {
		var AS = new webdriver.ActionSequence(activeDriver);
		AS.focus(Element).perform().then(function() {
			cb(null, true);
		});
	}
})
exports = module.exports = FocusAction