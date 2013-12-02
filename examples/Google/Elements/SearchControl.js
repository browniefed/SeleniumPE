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