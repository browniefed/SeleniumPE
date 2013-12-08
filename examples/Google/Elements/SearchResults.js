var SPE = require('SeleniumPE'),
	PageElement = SPE.Pages.PageElement,
	WebElement = SPE.Elements.WebElement,
	By = SPE.By._,
	JxActions = SPE.JxActions,
	JxWaitUntil = SPE.JxWaitUntil,
	JxInspector = SPE.JxInspector;

var SearchResults = PageElement.extend(function() {

}).methods({
	getResultStatsByIndex: function(index) {
		var el = new WebElement(this.root),
		 	eles = JxInspector.findDescendants(this.root, By.css('h3 em'));
		return eles[index].getInnerHtml();
	}
}).statics({
	findOnPage: function() {
		return new SearchResults(JxWaitUntil.elementExists(By.id('ires')));
	}
});

exports = module.exports = SearchResults;