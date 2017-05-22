(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/card/card.html'
    };
  }

})();
