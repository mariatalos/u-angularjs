/**
 * Created by Maria Paz Muñoz on 4/10/17.
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerAuth);

    /** @ngInject */
    function routerAuth($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                templateUrl: 'app/states/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashCtrl'
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                templateUrl: 'app/states/auth/login/login.html',
                controller: 'DashboardController',
                controllerAs: 'dashCtrl'
            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                params: {
                    currentUser: {}
                },
                templateUrl: 'app/states/auth/signin/signin.html',
                controller: 'DashboardController',
                controllerAs: 'dashCtrl'
            })

        ;
    }

})();