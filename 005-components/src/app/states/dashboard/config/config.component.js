(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('configuration',{
            templateUrl: 'app/states/dashboard/dashboard/config.html',
            controller: 'DashboardConfigController',
            controllerAs: 'dasConfigCtrl'
        });
})();