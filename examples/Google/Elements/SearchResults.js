var SPE = require('SeleniumPE'),
	AbstractPageElement = SPE.Elements.AbstractPageElement,
	By = SPE.By._,
	JxActions = SPE.JxActions;

var SearchResults = AbstractPageElement.extend(function() {
	this.initalized = true;
}).methods({

	getResultNameByIndex: function(index) {
		var results = this.findDescendants(By.css('ol > li'));
		return JxInspector.find(results[index], By.css('h3 a em')).getText();

	}
}).statics({
	findOnPage: function() {
		//SHOULD HAVE A TIMEOUT TO WAIT FOR THE ELEMENTS TO APPEAR
		return new SearchResults(By.id('center_col'));
	}
});

exports = module.exports = SearchResults;