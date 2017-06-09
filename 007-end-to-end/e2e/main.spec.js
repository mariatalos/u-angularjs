'use strict';

describe('Business card dashboard', function () {
  var page;

  function fillForm() {
    page.icon.click();
    page.icon.sendKeys('alarm');
    page.background.sendKeys('#1DE9B6');
    page.textColor.sendKeys('#FFFFFF');
    page.title.sendKeys('Maria Paz Muñoz Parra');
    page.description.sendKeys('Engineer, developer, and software project leader, specialized in front-end development and UI/UX design.');
  }

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should show the selected info in the business card', function() {
    fillForm();
    expect(page.icon.evaluate('icon')).toBe('alarm');
    expect(page.directiveTitle.evaluate('title')).toBe('Maria Paz Muñoz Parra');
    expect(page.directiveDescription.evaluate('description')).toBe('Engineer, developer, and software project leader, specialized in front-end development and UI/UX design.');
    expect(page.directiveReservedBy.evaluate('reservedBy').isPresent()).toBe(true);
  });

  it('should have only 1 item in favorite list', function () {
    fillForm();
    page.setFavorite.click();
    expect(page.favoriteList.count()).toEqual(1);
  });

});
