(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.favoritesList = [];

    vm.card = {};
    vm.setIcon = setIcon;
    vm.saveFavorite = saveFavorite;
    vm.card.icon = 'account_circle';


    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function saveFavorite(name) {
      vm.favoritesList.push(name);
    }
  }

})();
