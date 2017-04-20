(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }	

})();
