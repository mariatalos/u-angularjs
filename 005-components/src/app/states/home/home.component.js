(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('home',{
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
})();