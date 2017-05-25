(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('CardController', CardController);

  /** @ngInject */
  function CardController($scope) {
    var vm = this;
    vm.favorite = $scope.favorite;
    vm.name = $scope.name;
    vm.description = $scope.description;
    vm.background = $scope.background;
  }

})();
