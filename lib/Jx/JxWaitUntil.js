var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass'),
	_ = require('lodash'),
	JxInspector = require('./JxInspector'),
	JxTimeouts = require('./JxTimeouts');

var JxWaitUntil = klass(function() {

}).statics({
	bodyExists: function() {
		return this.elementExists(By.tagName('body'));
	},
	nothingIsLoading: function() {

	},
	elementIsVisible: function(root, elBy) {
		var element = this.elementExists(root, elBy);

		var waitForVisible = function() {
			return element.isDisplayed();
		}
		if (waitForVisible()) {
			return element;
		}
		var isVisible = function(cb) {
			setTimeout(function() {
				if (waitForVisible) {
					cb(null, true)
				}
			}, 500)
		}.future(this);

		isVisible.timeout = JxTimeouts.default;
		isVisible.result;

		return element;
	},
	elementIsHidden: function() {
		var element = this.elementExists(root, elBy);

		var waitForHidden = function() {
			return !element.isDisplayed();
		}
		if (waitForHidden()) {
			return element;
		}
		var isHidden = function(cb) {
			setTimeout(function() {
				if (waitForHidden) {
					cb(null, true)
				}
			}, 500)
		}.future(this);

		isHidden.timeout = JxTimeouts.default;
		isHidden.result;

		return element;
	},
	elementDoesNotExist: function() {
		var element;
		var tryFindElement = function() {
			try {
				return JxInspector.findDescendant(root, elBy);
			} catch (e) {
				return true;
			}
		}
		element = tryFindElement();
		if (element === true) {
			return true;
		}
		element = function(cb) {
			setTimeout(function() {
				var ele = tryFindElement();
				if (ele === true) {
					cb(null, true);
				}
			}, 500)
		}.future(this);

		element.timeout = JxTimeouts.default;
		return element.result;
	},
	activeElementHasProperty: function() {

	},
	activeElementHasTag: function() {

	},
	javascriptEvaluatesToTrue: function(js) {

	},
	elementExistsAndVisible: function() {

	},
	elementExists: function(root, elBy) {
		var element = JxInspector.findDescendant(root, elBy);
		if (!!element) {
			return element;
		}
		element = function(cb) {
			var callMe = function() {
				var ele = JxInspector.findDescendant(root, elBy);
				if (!!ele) {
					cb(null, ele);
				} else {
					callMe();
				}	
			}
			callMe()
		}.future(this);

		element.timeout = JxTimeouts.default;
		return element.result;
	},

});

exports = module.exports = JxWaitUntil;