'use strict';

describe('The main view', function () {
  var page;

  function fillForm() {
    page.title.sendKeys('Talos Business Card');
  }

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should be right data into directive', function() {
    fillForm();
    expect(page.directiveTitle.evaluate('title').isPresent()).toBe(true);
  });

  it('should favorite list equal to 1', function () {
    //other test here
  });

});
