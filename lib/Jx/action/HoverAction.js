var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');

var HoverAction = klass(function() {

}).statics({
	execute: function(Element, b, cb) {
		var AS = new webdriver.ActionSequence(activeDriver);
		AS.hover(Element, b).perform().then(function() {
			cb(null, true);
		});
	}
});

exports = module.exports =  HoverAction;