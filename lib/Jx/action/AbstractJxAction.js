var JxAction = require('./JxAction'),
	_ = require('lodash'),
    driver = require('../Driver/Driver');


var AbstractJxActions = function() {

}

exports.AbstractJxActions = _.extend(JxAction, AbstractJxActions);