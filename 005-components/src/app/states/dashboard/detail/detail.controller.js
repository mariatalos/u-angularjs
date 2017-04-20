/**
 * Created by alejogra on 3/17/17.
 */
(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardDetailController', DashboardDetailController);

    /** @ngInject */
    function DashboardDetailController($log, $stateParams) {
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
