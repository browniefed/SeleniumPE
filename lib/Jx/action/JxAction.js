var driver = require('../../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	JxWaitUntil = require('../JxWaitUntil'),
	Sync = require('sync');

var JxAction = klass(function() {

}).statics({
	DEFAULT_ACTION_PAUSE: 500
}).methods({
	execute: function() {
		var args = Array.prototype.slice.call(arguments, 0),
		Action = args.splice(0, 1),
		cb = args.reverse().splice(0, 1);

		args.reverse();

		this.beforeAction.sync(this);
		var returnOnAction = Action.execute.sync.apply(null, args);
		this.afterAction.sync(this);

		cb(returnOnAction);
	},
	beforeAction: function(cb) {
		JxWaitUntil.bodyExists();
		cb(null, true);
	},
	afterAction: function(cb) {
		//this.pause();
		JxWaitUntil.nothingIsLoading();
		cb(null, true);
	},
	pause: function() {
		//sleep for default action pause
	}
});

exports = module.exports = JxAction;