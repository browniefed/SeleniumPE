var AbstractJxAction = require('./AbstractJxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver');


var DragAndDropAction = function() {

}

exports.DragAndDropAction = _.extend(AbstractJxAction, DragAndDropAction);