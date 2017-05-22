(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.card = {};
    vm.setIcon = setIcon;
    vm.setFavorite = setFavorite;
    vm.card.icon = 'account_circle';

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function setFavorite() {

    }
  }

})();
