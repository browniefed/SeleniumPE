var driver = require('../Driver/Driver');

var AbstractPageElement = function(root) {
	this.root = driver.getDriver().findElement(root);

	this.getRoot = function() {
		return this.root;
	}
}

exports = module.exports = AbstractPageElement;