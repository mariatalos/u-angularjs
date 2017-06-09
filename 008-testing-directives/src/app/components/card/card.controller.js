(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('CardController', CardController);

  /** @ngInject */
  function CardController($scope) {

    var vm = this;
    vm.favorite = $scope.favorite;
    vm.title = $scope.title;
    vm.description = $scope.description;
    vm.reservedBy = $scope.reservedBy;
    vm.background = $scope.background;

  }

})();
