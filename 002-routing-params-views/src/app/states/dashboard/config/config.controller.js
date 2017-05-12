/**
 * Created by Maria Paz on 4/18/17.
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('ConfigController', ConfigController);

    /** @ngInject */
    function ConfigController(promiseObj, SITE_NAME) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.configdata = promiseObj.data;
    }
})();