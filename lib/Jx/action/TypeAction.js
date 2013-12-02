var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');

var TypeAction = klass(function() {
	
}).statics({
	execute: function(Element, text, cb) {
		Element.sendKeys(text).then(function() {
			cb(null, true);
		});
	}
});

exports = module.exports = TypeAction;