var assert = require('chai').assert,
  SPE = require('SeleniumPE'),
  test = SPE.test,
  By = SPE.Driver().getDriver().By,
  PageHelper = SPE.Pages.PageHelper,
  GooglePage = require('./Pages/GooglePage'),
  JxInspector = SPE.JxInspector,
  SEWebElement = SPE.Elements.WebElement,
  Sync = require('sync');


  test.describe('Google Search', function() {
    var Page;

    test.beforeEach(function() {
      Page = new GooglePage();
      PageHelper.goToPage(Page);
    });

    // test.it('should append query to title', function() {
    //   Sync(function() {
    //     var element = Page.getSearchControls();
    //     element.typeSearchParam('This is a search param');
    //     //DO AN ASSERTION WITH CHAI
    //   })
    // });

    test.it('should so search results', function() {
      var element = Page.getSearchControls();
      element.typeSearchParam('Selenium WebDriver');
      var value = element.getAttribute('value');
      assert(value).is.equal.to('Selenium WebDriver');
      // var searches = Page.getSearchResults();
      // console.log(searches.getResultNameByIndex(0));
    });

    test.afterEach(function() { 
      PageHelper.closePage();
    });
  });
