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