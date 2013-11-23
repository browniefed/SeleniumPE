var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');


var ClickAction = function() {

}

exports.ClickAction = _.extend(AbstractJxAction, ClickAction);