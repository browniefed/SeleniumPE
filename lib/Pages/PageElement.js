var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = activeDriver.By;
	
var PageElement = function(root) {
	if (root instanceof WebElement) {
		this.root = root;
	} else {
		this.root = activeDriver.findElement(root);
	}
	this.getRoot = function() {
		return this.root;
	}
}

exports = module.exports = PageElement;