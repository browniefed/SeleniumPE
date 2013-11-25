var SPE = require('../SeleniumPE'),
	test = SPE.test,
	Page = SPE.Pages.Page,
	PageHelper = SPE.Pages.PageHelper,
	expect = require('chai').expect;


test.describe('Create a Page', function() {

	test.it('Should make a new Page with URL as constructor argument', function() {
		var url = "http://www.google.com";
		var Page = new Page(url);
		expect(Page.getUrl()).to.be.a('string');
		expect(Page.getUrl()).to.equal(url);
	});

	test.it('Should create a new Page and navigate to it with PageHelper', function() {

	});

	test.it('Should find all descendant items', function() {
		
	});

})