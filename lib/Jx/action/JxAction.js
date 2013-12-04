var driver = require('../../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	Sync = require('sync'),
	JxWaitUntil = require('../JxWaitUntil');

var JxAction = klass(function() {

}).statics({
	DEFAULT_ACTION_PAUSE: 500,
	execute: function() {
		var args = Array.prototype.slice.call(arguments, 0);
		var Action = args.splice(0, 1)[0];
		var cb = args.reverse().splice(0, 1)[0];
		args.reverse();
		args.splice(0,0,Action);

		this.beforeAction.sync(this);
		var returnOnAction = Action.execute.sync.apply(Action.execute, args);
		this.afterAction.sync(this);
		
		cb(null, returnOnAction);
	},
	beforeAction: function(bcb) {
		JxWaitUntil.bodyExists();
		bcb(null, true);
	},
	afterAction: function(acb) {
		//this.pause();
		JxWaitUntil.nothingIsLoading();
		acb(null, true);
	},
	pause: function(timeout) {
		//sleep for default action pause
		// function(sleepFor, cb) {
		// 	setTimeout(function() {
		// 		cb(null, true);
		// 	}, sleepFor)
		// }.sync(this, timeout || this.DEFAULT_ACTION_PAUSE);
	}
});

exports = module.exports = JxAction;