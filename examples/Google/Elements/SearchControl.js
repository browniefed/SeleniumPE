var SPE = require('SeleniumPE'),
  PageElement = SPE.Pages.PageElement,
  By = SPE.By._,
  JxActions = SPE.JxActions,
  Sync = require('sync'),
  JxWaitUntil = SPE.JxWaitUntil,
  klass = require('klass'),
  SearchResults = require('./SearchResults');

var SearchControls = PageElement.extend(function() {

}).methods({
  typeSearchParam: function(text) {
     var searchField = JxWaitUntil.elementExists(By.name('q'));
     JxActions.type(searchField, text);
     return SearchResults.findOnPage();
  }
}).statics({
  findOnPage: function() {
    return new SearchControls(JxWaitUntil.elementExists(By.tagName('form')));
  }
});

exports = module.exports = SearchControls;