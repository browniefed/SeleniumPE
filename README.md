#SeleniumPE

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

```


`Pages/GooglePage.js`
```javascript
var SPE = require('SeleniumPE'),
  Page = SPE.Pages.Page,
  PageHelper = SPE.Pages.PageHelper,
  SearchControls = require('../Elements/SearchControls'),
  SearchResults = require('../Elements/SearchResults');

var GooglePage = Page.extend(function() {

}).methods({
  url: 'http://www.google.com',
  getSearchControls: function() {
    return SearchControls.findOnPage();
  },
  getSearchResults: function() {
  //Utilizes JxWaitUntil to wait for the results to appear instead of just sleeping an amount of seconds
  //Thus smart waiting
	return SearchResults.findOnPage();
  },
  setUrl: function(url) {
    this.url = url;
  }
});

exports = module.exports = GooglePage;
```
All other methods are implemented on Page parent

`Elements/SearchControl.js`
```javascript

var SPE = require('SeleniumPE'),
  By = SPE.By._,
  JxActions = SPE.JxActions,
  klass = require('klass');

var SearchControls = klass(function() {

}).methods({
  typeSearchParam: function(text) {
    var searchField = this.findDescendant(By.name('q'));
    JxActions.type(searchField, text);
  }
}).statics({
  findOnPage: function() {
    return new SearchControls(By.tagName('form'));
  }
});

exports = module.exports = SearchControls;
```

