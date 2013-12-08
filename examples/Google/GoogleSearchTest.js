var expect = require('chai').expect,
    SPE = require('SeleniumPE'),
    test = SPE.test,
    PageHelper = SPE.Pages.PageHelper,
    GooglePage = require('./Pages/GooglePage');

  test.describe('Google Search', function() {
    var Page = new GooglePage();

    test.beforeEach(function(done) {
        PageHelper.goToPage(Page);
    });

    test.it('should so search results', function(done) {

        var element = Page.getSearchControls();
            searches = element.typeSearchParam('Selenium WebDriver');
            results = searches.getResultStatsByIndex(5);
            expect(results).to.be.a('string');
    });

    test.after(function() { 
      PageHelper.closePage();
    });
  });

