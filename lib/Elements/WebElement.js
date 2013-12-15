var klass = require('klass'),
	driver = require('../Driver/Driver')(),
	WebElement = driver.buildDriver().WebElement,
	Sync = require('sync'),
	_ = require('lodash'),
	JxUtils = require('../Jx/util/JxUtils'),
	methodCalls = ['clear','click','findElement','findElements','getAttribute','getCssValue','getInnerHtml','getLocation','getOuterHtml',
				'getSize', 'getTagname','getText','isDisplayed','isElementPreset','isEnabled','isSelected','sendKeys','submit','toWireValue'],
	methods = {
		getEl: function() {
			return this.el;
		}
	};

	_(methodCalls).each(function(call) {
		methods[call] = function() {
			var c = call;
			return PEWebElement.callMethod(this.el, c, JxUtils.argsToArray(arguments));
		};
	});

	var PEWebElement = klass(function(el) {
		this.el = el;
	}).methods(methods).statics({
		callMethod: function(el, method, args) {
			args.splice(0, 0, el[method]);
			return PEWebElement.callMethodOnEl.apply(el, args);

		},
		callMethodOnEl: function(fn) {
			var args = JxUtils.argsToArray(arguments, 1);
			return function(cb) {
				fn.apply(this, args).then(function() {
					var retArgs = Array.prototype.slice.call(arguments, 0);
					retArgs.splice(0,0,null);
					cb.apply(cb, retArgs);
				})
			}.sync(this);
		}
	})

	exports = module.exports = PEWebElement;