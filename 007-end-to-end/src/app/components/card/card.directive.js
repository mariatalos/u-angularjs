(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        title: '=',
        description: '=',
        background: '=',
        textColor: '=',
        icon: '@',
        favorite: '&cbFavorite',
        reservedBy: '@'
      },
      templateUrl: 'app/components/card/card.html',
      controller: 'CardController',
      controllerAs: 'cardCtrl'
    };
  }

})();
