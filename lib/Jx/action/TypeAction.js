var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass'),
	PEWebElement = require('../../Elements/WebElement');

var TypeAction = klass(function() {
	
}).statics({
	execute: function(Element, keys, cb) {
		keys.splice(0,0, Element.sendKeys);
		PEWebElement.callMethodOnEl.apply(Element, keys);
		cb(null, true);
	}
});

exports = module.exports = TypeAction;