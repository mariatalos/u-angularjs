(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($state, $location, $stateParams, $log, SITE_NAME) {
        var vm = this;
        vm.mainTitle = SITE_NAME;

        vm.userName = $stateParams.username;
        vm.userPw = $stateParams.pass;

        if (vm.userName === null && vm.userPw === null){
            $state.go('home');
            $location.url($location.path());
        }

    }
})();