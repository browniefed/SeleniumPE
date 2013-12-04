var SPE = require('SeleniumPE'),
	PageElement = SPE.Pages.PageElement,
	WebElement = SPE.Elements.WebElement,
	By = SPE.By._,
	JxActions = SPE.JxActions,
	JxWaitUntil = SPE.JxWaitUntil,
	JxInspector = SPE.JxInspector;

var SearchResults = PageElement.extend(function() {

}).methods({
	getResultStats: function() {
		return new WebElement(this.root).getInnerHtml();
	}
}).statics({
	findOnPage: function() {
		return new SearchResults(JxWaitUntil.elementExists(By.id('resultStats')));
	}
});

exports = module.exports = SearchResults;