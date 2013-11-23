var Test = function(testsObj) {

	this.tests = testsObj;

	this.run = function() {

		_(testsObjs.tests).each(function(test){
			testsObjs.before();
			console.log(test);
			testsObjs.after();
		}, this)
		//Loop each test, exceute befores, execute afters, cleanups, etc.
		//Catch all exceptions, handle them, move on to the next test if exception is thrown 
	}

}

exports.Test = Test;