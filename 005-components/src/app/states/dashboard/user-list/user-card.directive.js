(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('userCard', {
      bindings: {
        user: '<',
        onUserSelected: '&',
        onUserLeft: '&'
      },
      templateUrl: 'app/states/dashboard/user-list/user-card.html'

    });
})();

