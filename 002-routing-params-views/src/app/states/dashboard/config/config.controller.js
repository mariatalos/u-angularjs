/**
 * Created by Maria Paz on 4/18/17.
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('ConfigController', ConfigController);

    /** @ngInject */
    function ConfigController($state, promiseObj, $location, SITE_NAME, Auth) {
        var vm = this;
        vm.mainTitle = SITE_NAME;

        vm.configdata = promiseObj.data;

        vm.userName = Auth.currentUser();

        angular.forEach(vm.configdata, function (value, key) {

            console.log(value);

        });



        if (vm.userName === null && vm.userPw === null){
            $state.go('home');
            $location.url($location.path());
        }

    }
})();