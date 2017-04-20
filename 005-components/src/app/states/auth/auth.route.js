(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routerAuth);

    /** @ngInject */
    function routerAuth($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                url: '/auth',
                views: {
                    "site@": {
                        template: '<section class="general-section" ui-view></section>'
                    }
                },
                onEnter: function(Auth, $state){
                    if(Auth.currentUser()){
                        $state.go('mainDashboard');
                    }
                }
            })
            .state('login', {
                parent: 'auth',
                url: '/login',
                params: {
                    currentUser: {}
                },
                templateUrl: 'app/states/auth/login/login.html',
                controller: 'AuthLoginController',
                controllerAs: 'auLoginCtrl'
            })
            .state('signup', {
                parent: 'auth',
                url: '/signup',
                templateUrl: 'app/states/auth/signup/signup.html',
                controller: 'AuthSignUpController',
                controllerAs: 'auSignupCtrl'
            });
    }

})();
