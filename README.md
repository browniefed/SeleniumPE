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

Writing a test as `test.js`
```javascript
var SPE = require('SeleniumPE'),
	test = SPE.test,
  Page = SPE.Pages.Page,
  PageHelper = SPE.Pages.PageHelper,
  AbstractPageElement = SPE.Elements.AbstractPageElement,
  JxActions = SPE.JxActions,
	By = SPE.Driver.getDriver().By;

test.describe('Google Search', function() {
  
  var Page;

  test.beforeEach(function() {
  	Page = new Page('http://www.google.com');
  	PageHelper.goToPage(Page);
  });

  test.it('should append query to title', function() {
    Sync(function() {
      var element = new AbstractPageElement(By.id('viewport'));
      var q = element.findField('q');
      JxActions.type(q, 'Test');
    })
  });

  test.afterEach(function() { 
    PageHelper.closePage();
  });
});
```
Because selenium complies with node.js and it's async, event loop goodness we must wrap each test in it's own Fiber.
I've chosen sync because it made things easy, and allowed me to easily turn almost all promise returning async functions into synchronous functions.
If using methods I've written this allows you to write your tests without getting into callback hell. I understand that node.js is async but I do not see the point in it for testing, especially with Selenium where you want one action to ocurr after another. Generally speaking that is.

If you do not like it then by all means use your own stuff.

This can be run with

```
mocha test.js
```

This isn't a great test because it is creating a page rather than utilizing a predefined set of pages that you've built.
Same goes for the AbstractPageElement. As described above you should build out reusable AbstractPageElements to reuse across tests.

All actions whether they be typing, clicking, hovering, dragging/dropping, etc should be done through JxActions.
This gives you the ability to control all actions across your tests if something arises and you need to make changes that effect your tests.
ex. On click events we set up a before hook to check that nothing (ajaxy, or other) is loading before moving on with the app.


Here is a quick example of how 

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
  Sync = require('sync');


  test.describe('Google Search', function() {
    var Page;

    test.before(function() {
      Page = new GooglePage();
      PageHelper.goToPage(Page);
    });

    test.it('should append query to title', function() {
      Sync(function() {
        var element = Page.getSearchControls();
        element.typeSearchParam('This is a search param');
        //DO AN ASSERTION WITH CHAI
      })
    });

    test.it('should so search results', function() {
      Sync(function() {
        var element = Page.getSearchControls();
        element.typeSearchParam('Selenium WebDriver');
        var searches = Page.getSearchResults();
      });
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
  SearchControls = require('../Elements/SearchControls');

var GooglePage = Page.extend(function() {

}).methods({
  url: 'http://www.google.com',
  getSearchControls: function() {
    return SearchControls.findOnPage();
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
  AbstractPageElement = SPE.Elements.AbstractPageElement,
  By = SPE.By._,
  JxActions = SPE.JxActions;

var SearchControls = AbstractPageElement.extend(function() {
  this.initalized = true;
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

