var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../Driver/Driver');

var FocusAction = function() {

}

exports.FocusAction = _.extend(AbstractJxAction, FocusAction);