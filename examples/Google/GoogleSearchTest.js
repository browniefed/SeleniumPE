var expect = require('chai').expect,
    SPE = require('SeleniumPE'),
    test = SPE.test,
    PageHelper = SPE.Pages.PageHelper,
    GooglePage = require('./Pages/GooglePage');

  test.describe('Google Search', function() {
    var Page;

    test.beforeEach(function(done) {
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

    test.it('should so search results', function(done) {

        var element = Page.getSearchControls();
            searches = element.typeSearchParam('Selenium WebDriver'),
            results = searches.getResultStats();

            expect(results).to.be.a('string');
    });

    test.afterEach(function() { 
      PageHelper.closePage();
    });
  });
