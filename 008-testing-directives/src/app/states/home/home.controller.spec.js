(function() {
  'use strict';

  describe('HomeController', function() {
    var homeCtrl, controller, rootScope, scope;

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      controller = $injector.get('$controller');
      rootScope = $injector.get('$rootScope');
      scope = rootScope.$new();
    }));

    beforeEach(function () {
      homeCtrl = controller('HomeController', {
        $scope: scope
      });
    });

    it('should be registered', function() {
      expect(homeCtrl).not.toEqual(null);
    });

    describe('Set favorite', function () {

      it('should exist as an option', function() {
        expect(homeCtrl.card.setFavorite).toBeDefined();
      });

      it('should add a business card as a favorite', function () {
        spyOn(homeCtrl.card, 'setFavorite').and.callThrough();

        expect(homeCtrl.favoriteList.length).toEqual(0);

        homeCtrl.card.setFavorite('Favorite marked');
        expect(homeCtrl.card.setFavorite).toHaveBeenCalledWith('Favorite marked');

        expect(homeCtrl.favoriteList).toEqual(['Favorite marked']);
        expect(homeCtrl.favoriteList.length).toEqual(1);
      });
    });

    describe('Set icon', function () {
      it('should set the icon selected', function () {
        spyOn(homeCtrl, 'setIcon').and.callThrough();

        expect(homeCtrl.card.icon).toEqual(undefined);

        homeCtrl.setIcon('home');

        expect(homeCtrl.setIcon).toHaveBeenCalledWith('home');
        expect(homeCtrl.card.icon).toEqual('home');
      });
    });

  });
})();