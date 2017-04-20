(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardConfigController', DashboardConfigController);

    /** @ngInject */
    function DashboardConfigController($log, $stateParams, Auth) {
        var vm = this;

        vm.currentId = $stateParams.id;
        vm.currentId = 1;
        vm.list = [{
            id:1,
            name:"Felipe"
        },{
            id:2,
            name:"Alejandro"
        },{
            id:3,
            name:"Luis"
        },{
            id:4,
            name:"Mateo"
        },{
            id:5,
            name:"Sebastían"
        }];
    }
})();
