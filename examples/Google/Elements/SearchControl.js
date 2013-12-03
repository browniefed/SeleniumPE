var SPE = require('SeleniumPE'),
  AbstractPageElement = SPE.Elements.AbstractPageElement,
  By = SPE.By._,
  JxActions = SPE.JxActions,
  Sync = require('sync'),
  JxWaitUntil = SPE.JxWaitUntil,
  klass = require('klass');

var SearchControls = klass(function() {

}).methods({
  typeSearchParam: function(text) {
    var searchField = this.findDescendant(By.name('q'));
    JxActions.type(searchField, text);
  }
}).statics({
  findOnPage: function() {
    return new SearchControls(JxWaitUntil.elementExists(By.tagName('form')));
  }
});

exports = module.exports = SearchControls;