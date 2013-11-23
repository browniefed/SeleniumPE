var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../Driver/Driver');

var HoverAction = function() {

}

exports.HoverAction = _.extend(AbstractJxAction, HoverAction);