// var webdriver = require('selenium-webdriver'),
// 	chai = require('chai');

// var driver = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.chrome()).
//    build();

// driver.get('http://www.google.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver - Google Search';
//  });
// }, 1000);

// driver.quit();

var PageHelper = require('./Pages/PageHelper');

console.log(PageHelper);