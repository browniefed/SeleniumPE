var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass'),
	PEWebElement = require('../../Elements/WebElement');

var TypeAction = klass(function() {
	
}).statics({
	execute: function(Element, keys, cb) {
		PEWebElement.callMethod(Element, 'sendKeys', keys);
		cb(null, true);
	}
});

exports = module.exports = TypeAction;