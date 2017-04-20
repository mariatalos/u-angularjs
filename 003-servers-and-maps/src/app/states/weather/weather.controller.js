(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope) {
    var vm = this;

    //Talitos API Key
    vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
    vm.kind = '0';

    //Should we extend or use vm?
    angular.extend($scope, {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', function(event, args){
        if(vm.kind == '0'){
            //Remember Services
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/home?APPID='+vm.apiKey+'&q=London'
            }).then(function successCallback(response) {
                alert(response.data.name); //Not a good practice 
            }, function errorCallback(response) {
                alert('Error');
            });
        }else if(vm.kind == '1'){
            //http://api.openweathermap.org/v3/uvi/{lat},{lon}./current.json?appid={your-api-key}
        }else if(vm.kind == '2'){
            //http://api.openweathermap.org/pollution/v1/co/{location}/current.json?appid={api_key}
        }
    });

  }

})();
