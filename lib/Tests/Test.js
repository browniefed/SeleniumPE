var _ = require('lodash'),
	test = require('selenium-webdriver/testing');
var Test = function(testsObj) {

	this.tests = testsObj;

	this.run = function() {

		_(this.tests.tests).each(function(test){
			var before = this.tests.before();
			before.done(function() {
				test();
			});
			this.tests.after();
		}, this)
		//Loop each test, exceute befores, execute afters, cleanups, etc.
		//Catch all exceptions, handle them, move on to the next test if exception is thrown 
	}

}

exports.Test = Test;