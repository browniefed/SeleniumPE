var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	_ = require('lodash');

var JxWaitUntil = klass(function() {

}).statics({
	bodyExists: function() {

	},
	nothingIsLoading: function() {

	},
	elementIsVisible: function() {

	},
	elementIsHidden: function() {

	},
	elementDoesNotExist: function() {

	},
	activeElementHasProperty: function() {

	},
	activeElementHasTag: function() {

	},
	javascriptEvaluatesToTrue: function(js) {

	},
	elementExistsAndVisible: function() {

	}
});

exports = module.exports = JxWaitUntil;