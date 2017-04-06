(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/states/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashCtrl'
        })

      .state('home', {
        url: '/',
        templateUrl: 'app/states/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
