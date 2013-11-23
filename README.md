#NodeSPE

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
