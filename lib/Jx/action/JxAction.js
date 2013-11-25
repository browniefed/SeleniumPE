var driver = require('../../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	JxWaitUntil = require('../JxWaitUntil');

var JxAction = klass(function() {

}).statics({
	DEFAULT_ACTION_PAUSE: 500
}).methods({
	execute: function() {
		this.beforeAction();
		this.doExecute();
		this.afterAction();
	},
	beforeAction: function() {
		JxWaitUntil.bodyExists();
	},
	afterAction: function() {
		//this.pause();
		JxWaitUntil.nothingIsLoading();
	},
	pause: function() {
		//sleep for default action pause
	}
});

exports = module.exports = JxAction;