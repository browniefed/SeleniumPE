var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');

var TypeAction = AbstractJxAction.extend(function() {
	
}).statics({
	type: function(element, text) {
		element.sendKeys(text);
	}
});

exports = module.exports =  TypeAction;