(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.favoriteList = [];
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.card = {};
    vm.card.setFavorite =  setFavorite;
    vm.setIcon = setIcon;
    
    function setFavorite(item) {
      vm.favoriteList.push(item);
    }

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }
  }

})();
