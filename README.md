#SeleniumPE

This selenium uses Sync lib (Fibers/Futures) in the background to make webdriver synchronous.
After building this I found out that webdriver-sync exists. The benefits to SeleniumPE are that you don't need Java and still get synchornous calls.

Node Selenium Page Element.
This style of writing Selenium tests is based on @seanadkinson and his coined "Page Element" style.

It's main purpose is for large single page applications.
At it's core it says Pages should have the information to get to themselves. 
Each element on the page is an Abstract Page Element that should represent something.
When actions take place a new Page Element should return.
Page elements should be able to find themselves on the page, or accept a root element to operate on.
There should be no selectors in your test.
When things occur assertions should ensure that the state of the application is correct.

An example

```javascript
var rightSidebar = RightSideBar.findOnPage(); //returns new RightSideBar();

var userDropdown = rightSidebar.openUserDropdown();  // returns new UserDropDown which extends DropDown

userDropdown.clickLogout();
````

In this example findOnPage will assert that the sidebar exists.
Opening the users dropdown will wait for the dropdown to show up, and exist on the page.
Clicking will check that a link with text Logout is scoped within the UserDropDown.

Each PageElement that gets returned is continually scoped down with in the element.
Meaning when find(By.xPath()) it will only be searching within the scope of it's root.

##How To Write a Test

First off install mocha globally.

```
npm install -g mocha
npm install SeleniumPE
```



This isn't a great test because it is creating a page rather than utilizing a predefined set of pages that you've built.
Same goes for the AbstractPageElement. As described above you should build out reusable AbstractPageElements to reuse across tests.

All actions whether they be typing, clicking, hovering, dragging/dropping, etc should be done through JxActions.
This gives you the ability to control all actions across your tests if something arises and you need to make changes that effect your tests.
ex. On click events we set up a before hook to check that nothing (ajaxy, or other) is loading before moving on with the app.


Here is a quick example of how 

This can be run with

```
mocha GoogleSearchTest.js
```

`GoogleSearchTest.js`
```javascript
var expect = require('chai').expect,
    SPE = require('SeleniumPE'),
    test = SPE.test,
    PageHelper = SPE.Pages.PageHelper,
    GooglePage = require('./Pages/GooglePage'),
    Sync = require('sync');


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

    test.it('should so search results', function(done) {
        var element = Page.getSearchControls();
            searches = element.typeSearchParam('Selenium WebDriver');
            results = searches.getResultStatsByIndex(0);
            expect(results).to.be.a('string');
    });

    test.after(function() { 
        PageHelper.closePage();
    });
  });



```


`Pages/GooglePage.js`
```javascript
var SPE = require('SeleniumPE'),
  Page = SPE.Pages.Page,
  PageHelper = SPE.Pages.PageHelper,
  SearchControls = require('../Elements/SearchControls');
  
var GooglePage = Page.extend(function() {

}).methods({
  url: 'http://www.google.com',
  getSearchControls: function() {
    return SearchControls.findOnPage();
  }
});

exports = module.exports = GooglePage;
```
All other methods are implemented on Page parent

`Elements/SearchControl.js`
```javascript
var SPE = require('SeleniumPE'),
  driver = SPE.Driver().getDriver(),
  PageElement = SPE.Pages.PageElement,
  By = SPE.By._,
  JxActions = SPE.JxActions,
  JxWaitUntil = SPE.JxWaitUntil,
  SearchResults = require('./SearchResults');

var SearchControls = PageElement.extend(function() {

}).methods({
  typeSearchParam: function(text) {
     var searchField = JxWaitUntil.elementExists(this.root, By.name('q'));
     JxActions.type(searchField, text);
     searchField.sendKeys(driver.Key.ENTER);
     return SearchResults.findOnPage();
  }
}).statics({
  findOnPage: function() {
    return new SearchControls(JxWaitUntil.elementExists(By.tagName('form')));
  }
});

exports = module.exports = SearchControls;
```

`Elements/SearchResults.js`
```javascript
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
```






