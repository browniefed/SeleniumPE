var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');

var TypeAction = {
	type: function(element, text) {
		element.getRoot().sendKeys(text);
	}
}

exports = module.exports =  _.extend(TypeAction, AbstractJxAction);