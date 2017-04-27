(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, weatherInfo) {
    var vm = this;

    //Talos API Key

    vm.kind = '0';

    //Extend is a good practice :)
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
        },
        markers: {
            onClickMarker: {
                lat: 40.51379915504413,
                lng: -99.31640625,
                message: "I want to travel here!",
                focus: true,
                draggable: false
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', function(event, args){


        vm.lat = args.leafletEvent.latlng.lat;
        vm.long = args.leafletEvent.latlng.lng;

        $scope.markers.onClickMarker.lat=vm.lat;
        $scope.markers.onClickMarker.lng=vm.long;

        console.log(vm.lat, vm.long);

        if(vm.kind == '0'){

            $scope.data = weatherInfo.weather(vm.lat, vm.long);
            console.log($scope.data);

        }else if(vm.kind == '1'){
            //http://api.openweathermap.org/v3/uvi/{lat},{lon}./current.json?appid={your-api-key}
        }else if(vm.kind == '2'){
            //http://api.openweathermap.org/pollution/v1/co/{location}/current.json?appid={api_key}
        }


    });

  }

})();
