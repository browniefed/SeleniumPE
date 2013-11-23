var _ = require('lodash');
var Test = function(testsObj) {

	this.tests = testsObj;

	this.run = function() {

		_(this.tests).each(function(test){
			this.tests.before();
			console.log(test);
			this.tests.after();
		}, this)
		//Loop each test, exceute befores, execute afters, cleanups, etc.
		//Catch all exceptions, handle them, move on to the next test if exception is thrown 
	}

}

exports.Test = Test;