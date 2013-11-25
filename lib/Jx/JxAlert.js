var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	klass = require('klass');
var JxAlert = klass(function() {

}).methods({
	getAlert: function() {
		var alert = null;
		try {
			if (this.isBrowserAlertPresent()) {
				alert = driver.getDriver().switchTo().alert();
			}
		} catch(e) {

		}
		return alert;
	},
	isBrowserAlertPresent: function() {
		try {
			driver.getDriver().getTitle();
			return false;
		} catch (e) {
			return true;
		}
	},
	acceptAlert: function() {
		this.getAlert().accept();
	},
	dismissAlert: function() {
		this.getAlert().dismiss();
	}
})

exports = module.exports =  JxAlert;