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
                views:{
                    "site@":{
                        template: '<section class="dashboard" ui-view="main"></section>',
                        controller: 'DashboardController',
                        controllerAs: 'dashCtrl'
                    },
                    "navbar@":{
                        templateUrl: 'app/components/navbar/navbar.html',
                        controller: 'NavbarController',
                        controllerAs: 'navCtrl'
                    }
                },
                onEnter: function(Auth, $state){
                    if(!Auth.currentUser()){
                        $state.go('login');
                    }
                }

            })

            .state('main', {
                parent: 'dashboard',
                url: '/main',
                params: {
                    currentUser: {}
                },
                views:{
                    "main":{
                        templateUrl: 'app/states/dashboard/main/main-dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'dasCtrl'
                    }
                }
            })

            .state('config', {
                parent: 'dashboard',
                url: '/config',

                views: {
                    "main": {
                        templateUrl: 'app/states/dashboard/config/config.html',
                        controller: 'ConfigController',
                        controllerAs: 'configCtrl'
                    }
                },

                resolve:{
                    promiseObj:  function($http){
                        return $http({method: 'GET', url: 'app/states/dashboard/config/configuration.json'});
                    }
                }
            })
            
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                params: {
                    currentUser: {}
                },
                views: {
                    "main": {
                        templateUrl: 'app/states/dashboard/detail/detail.html',
                        controller: 'DashboardController',
                        controllerAs: 'dashCtrl'
                    }
                }
            })

        ;
    }

})();