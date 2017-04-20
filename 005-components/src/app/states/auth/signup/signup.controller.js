(function () {
    'use strict';

    angular
        .module('angularApp')
        .controller('AuthSignUpController', AuthSignUpController);

    /** @ngInject */
    function AuthSignUpController($log, $timeout, $state, Auth) {
        var vm = this;

        vm.newUser = {};

        vm.signUpUser = signUpUser;

        function signUpUser() {

            if (Auth.registerUser(vm.newUser)) {
                vm.alert = 'Succesfuly Registered, redirecting...';
            } else {
                vm.alert = 'Email already been used, redirecting...';
            }
            redirect();
        }

        function redirect() {
            $timeout(function () {
                $state.go('login', {currentUser: vm.newUser});
            }, 2000);
        }
    }

})();
