var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');

var FocusAction = function() {

}

exports = module.exports = _.extend(AbstractJxAction, FocusAction);