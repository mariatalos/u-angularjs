(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('detail',{
            templateUrl: 'app/states/dashboard/detail/detail.html',
            controller: 'DashboardDetailController',
            controllerAs: 'dasDetailCtrl'
        });
})();