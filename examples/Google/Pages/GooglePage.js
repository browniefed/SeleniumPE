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
  setUrl: function(url) {
    this.url = url;
  },
  getSearchResults: function() {
    return SearchResults.findOnPage();
  }
});

exports = module.exports = GooglePage;