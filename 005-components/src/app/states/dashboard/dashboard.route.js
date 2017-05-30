(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerDashboard);

    /** @ngInject */
    function routerDashboard($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                views:{
                    "site@":{
                        component: 'dashboardSite'
                    },
                    "navbar@":{
                        component: 'navbar'
                    }
                },
                onEnter: function(Auth, $state){
                    if(!Auth.currentUser()){
                        $state.go('login');
                    }
                }
            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                views:{
                    "main":{
                        component: 'detail'
                    }
                }
            })
            .state('mainDashboard', {
                parent: 'dashboard',
                url: '/main-dashboard',
                params: {
                    currentUser: {}
                },
                views:{
                    "main":{
                        component: 'dashboardMain'
                    }
                }
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                views:{
                    "main@":{
                        component: 'configuration'
                    }
                }
            });
    }

})();
