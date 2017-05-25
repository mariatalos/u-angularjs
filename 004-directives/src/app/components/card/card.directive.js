(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          name: '=',
          description: '=',
          background: '=',
          textColor: '=',
          icon: '@',
          favorite: '&'
        },
        templateUrl: 'app/components/card/card.html',
        controller: 'CardController',
        controllerAs: 'cardCtrl'

    };
  }

})();
