var SPE = require('SeleniumPE'),
  driver = SPE.Driver().getDriver(),
  AbstractPageElement = SPE.Elements.AbstractPageElement,
  By = SPE.By._,
  JxActions = SPE.JxActions,
  JxWaitUntil = SPE.JxWaitUntil,
  SearchResults = require('./SearchResults');

var SearchControls = AbstractPageElement.extend(function() {

}).methods({
  typeSearchParam: function(text) {
     var searchField = JxWaitUntil.elementExists(this.root, By.name('q'));
     JxActions.type(searchField, text, driver.Key.ENTER);
     return SearchResults.findOnPage();
  }
}).statics({
  findOnPage: function() {
    return new SearchControls(JxWaitUntil.elementExists(By.tagName('form')));
  }
});

exports = module.exports = SearchControls;