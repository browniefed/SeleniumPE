var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');

var TypeAction = AbstractJxAction.extend(function() {
	
}).statics({
	execute: function(Element, text) {
		return Element.sendKeys(text);
	}
});

exports = module.exports =  TypeAction;