var SPE = require('SeleniumPE'),
	PageElement = SPE.Pages.PageElement,
	By = SPE.By._,
	JxActions = SPE.JxActions,
	JxWaitUntil = SPE.JxWaitUntil,
	JxInspector = SPE.JxInspector;

var SearchResults = PageElement.extend(function() {

}).methods({

	getResultNameByIndex: function(index) {
		var results = this.findDescendants(By.css('ol > li'));
		return JxInspector.find(results[index], By.css('h3 a em')).getText();
	}
}).statics({
	findOnPage: function() {
		return new SearchResults(JxWaitUntil.elementExists(By.id('center_col')));
	}
});

exports = module.exports = SearchResults;