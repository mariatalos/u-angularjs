(function () {
    'use strict';

    angular
        .module('angularApp')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($log, SITE_NAME, $state) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.signUpToday = signUpToday;

        function signUpToday() {
            $state.go('signup');
        }
    }
})();
