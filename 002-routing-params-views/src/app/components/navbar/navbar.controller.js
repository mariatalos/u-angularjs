(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('NavbarController', NavbarController);

    /** @ngInject */
    function NavbarController($state, Auth, $timeout) {
        var vm = this;
        vm.user = Auth.currentUser();
        vm.logOut = logOut;

        function logOut() {
            $state.go('login');
            Auth.logOut();
        }
    }
})();