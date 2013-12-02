var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver'),
	klass = require('klass');

var TypeAction = klass(function() {
	
}).statics({
	execute: function(Element, text) {
		//THIS NEEDS TO BE CHANGED TO ALLOW TO SEND ACTUAL KEYS NOT JUST CHARACTERS
		return Element.sendKeys(text);
	}
});

exports = module.exports =  TypeAction;