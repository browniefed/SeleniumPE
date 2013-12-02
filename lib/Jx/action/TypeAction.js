var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');

var TypeAction = klass(function() {
	
}).statics({
	execute: function() {
		this.action(arguments[0][0], arguments[0][1], arguments[1]);
	},
	action: function(Element, text, cb) {
		Element.sendKeys(text).then(function() {
			cb(null, true);
		});
	}
});

exports = module.exports = TypeAction;