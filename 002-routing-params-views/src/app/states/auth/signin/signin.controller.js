(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AuthSigninController', AuthSigninController);

  /** @ngInject */
  function AuthSigninController($log, $timeout, $state, Auth) {
    var vm = this;

    vm.newUser = {};

    vm.signInUser = signInUser;
    
    function signInUser() {
      console.log('entró a signinuser fuction', vm.newUser);
      if(Auth.registerUser(vm.newUser)){

        vm.alert = 'Succesfuly Registered, redirecting...';
      }else{
        vm.alert = 'Email already been used, redirecting...';
      }
  		redirect();
    }

    function redirect() {
  		$timeout(function(){
  			$state.go('login', {currentUser:vm.newUser});
  		}, 2000);
    }

  }
})();
