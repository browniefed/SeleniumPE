var assert = require('chai').assert,
  SPE = require('SeleniumPE'),
  test = SPE.test,
  By = SPE.Driver().getDriver().By,
  PageHelper = SPE.Pages.PageHelper,
  GooglePage = require('./Pages/GooglePage'),
  JxInspector = SPE.JxInspector,
  SEWebElement = SPE.Elements.WebElement,


  test.describe('Google Search', function() {
    var Page;

    test.before(function() {
      Page = new GooglePage();
      PageHelper.goToPage(Page);
    });

    test.it('should append query to title', function() {
        var element = Page.getSearchControls();
        element.typeSearchParam('This is a search param');
        //DO AN ASSERTION WITH CHAI
    });

    test.it('should so search results', function() {
        var element = Page.getSearchControls();
        element.typeSearchParam('Selenium WebDriver');
        var searches = Page.getSearchResults();
		var firstResult = searches.getResultTextByIndex(0);
		//DO AN ASSERTION THAT FIRST RESULT TEXT EQUALS SOMETHINS
    });

    test.after(function() { 
      SPE.Pages.PageHelper.closePage();
    });
  });