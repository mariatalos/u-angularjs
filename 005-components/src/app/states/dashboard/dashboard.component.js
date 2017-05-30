(function(){
    'use strict';

    angular
        .module('angularApp')
        .component('dashboardSite',{
            template: '<section class="dashboard" ui-view="main"></section>'
        });
})();