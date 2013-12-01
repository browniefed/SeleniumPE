var JxAction = require('./JxAction'),
	_ = require('lodash'),
	driver = require('../../Driver/Driver')(),
	klass = require('klass');



var ClickAction = klass(function() {

}).statics({
	execute: function(Element, cb) {
		var retClick = Element.click();
		var retClickPromise = retClick.then(function() {
			cb(null, retClickPromise);
		});
	}
});

exports = module.exports = ClickAction;