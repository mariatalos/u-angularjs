(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdIconProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $mdIconProvider.fontSet('md', 'material-icons');
  }

})();
