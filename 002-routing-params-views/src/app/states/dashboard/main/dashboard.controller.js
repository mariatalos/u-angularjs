(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($state, $location, SITE_NAME, Auth) {
        var vm = this;
        vm.mainTitle = SITE_NAME;

        vm.userName = Auth.currentUser();

        vm.goToDetail = goToDetailMethod;
        vm.goToConfig = goToConfigMethod;

        function goToDetailMethod() {
            $state.go('detail');
        }

        function goToConfigMethod() {
            $state.go('detail');
        }

        if (vm.userName === null && vm.userPw === null){
            $state.go('home');
            $location.url($location.path());
        }

    }
})();