var JxAction = require('./JxAction'),
	_ = require('lodash'),
    driver = require('../../Driver/Driver');


var AbstractJxAction = function() {

}

exports = module.exports =  _.extend(AbstractJxAction, JxAction);