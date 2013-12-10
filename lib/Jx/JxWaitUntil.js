var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	_ = require('lodash'),
	JxInspector = require('./JxInspector'),
	JxTimeouts = require('./JxTimeouts'),
	Sync = require('sync'),
	JxActions = require('./JxActions');

var JxWaitUntil = klass(function() {

}).statics({
	bodyExists: function() {
		return this.elementExists(By.tagName('body'));
	},
	nothingIsLoading: function() {

	},
	elementIsVisible: function(root, elBy) {
		var element = JxWaitUntil.elementExists(root, elBy);

		isVisible = function(cb) {
			var callMe = function() {
				try {
					var ele = element.isDisplayed();
					if (ele) {
						cb(null, ele);
					} else {
						JxWaitUntil.pause();
						callMe();
					}
				} catch (e) {
					throw e;
				}
			}
			callMe()

		}.future(this);
		
		isVisible.timeout = JxTimeouts.default;

		return element;
	},
	elementIsHidden: function() {
		var element = JxWaitUntil.elementExists(root, elBy);

		isHidden = function(cb) {
			var callMe = function() {
				try {
					var ele = element.isDisplayed();
					if (!ele) {
						cb(null, ele);
					} else {
						JxWaitUntil.pause();
						callMe();
					}
				} catch (e) {
					throw e;
				}
			}
			callMe()

		}.future(this);
		
		isHidden.timeout = JxTimeouts.default;

		return element;
	},
	elementDoesNotExist: function(root, elBy) {
		var element = JxInspector.findDescendant(root, elBy);
		if (!element) {
			return true;
		}
		element = function(cb) {
			var callMe = function() {
				try {
					var ele = JxInspector.findDescendant(root, elBy);
					if (!ele) {
						cb(null, ele);
					} else {
						JxWaitUntil.pause();
						callMe();
					}
				} catch (e) {
					throw e;
				}
			}
			callMe()

		}.future(this);
		
		element.timeout = JxTimeouts.default;

		return element.result;
	},
	activeElementHasProperty: function() {

	},
	activeElementHasTag: function() {

	},
	javascriptEvaluatesToTrue: function() {
		var args = Array.prototype.slice.call(arguments, 0);


		var runScript = function(args, cb) {
			var callMe = function() {
				try {
					var ret = JxActions.executeScript.apply(JxActions, args);
					if (!!ret) {
						cb(null, ret);
					} else {
						JxWaitUntil.pause();
						callMe();
					}
				} catch (e) {
					throw e;
				}
			}
			callMe()

		}.future(this, args);
		
		runScript.timeout = JxTimeouts.default;

		return runScript.result;
	},
	elementExistsAndVisible: function() {
		return JxWaitUntil.elementIsVisible(root, elBy);
	},
	elementExists: function(root, elBy) {
		var element = JxInspector.findDescendant(root, elBy);
		if (!!element) {
			return element;
		}
		element = function(cb) {
			var callMe = function() {
				try {
					var ele = JxInspector.findDescendant(root, elBy);
					if (!!ele) {
						cb(null, ele);
					} else {
						JxWaitUntil.pause();
						callMe();
					}
				} catch (e) {
					throw e;
				}
			}
			callMe()

		}.future(this);
		
		element.timeout = JxTimeouts.default;

		return element.result;


	},
	pause: function(timeout, cb) {
		Sync(function() {
			var x = function(cb) {
				setTimeout(function() {
					cb(null, true);
				}, 500)
			}.sync(null)
		});
	}

});

exports = module.exports = JxWaitUntil;