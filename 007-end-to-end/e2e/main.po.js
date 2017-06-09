/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {

  this.icon = element(by.xpath('//*[@id="site"]/section/main/section/div/form/md-content/div[1]/div/button[3]'));
  this.title = element(by.model('homeCtrl.card.title'));
  this.background = $$('.md-color-picker-input').first();
  this.textColor = $$('.md-color-picker-input').last();
  this.description = element(by.model('homeCtrl.card.description'));
  this.setFavorite = element(by.id('favoriteBtn'));

  this.favoriteList = element.all(by.repeater('favorite in homeCtrl.favoriteList'));

  this.directive = element(by.id('card'));
  this.directiveReservedBy = element(by.id('cardReservedBy'));
  this.directiveTitle = element(by.id('cardTitle'));
  this.directiveDescription = element(by.id('cardDescription'));
};

module.exports = new MainPage();
