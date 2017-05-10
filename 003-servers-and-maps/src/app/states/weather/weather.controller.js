(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog, WeatherService) {
        var vm = this;

        //Talos API Key
        vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
        vm.kind = 0;

        var alert;
        $scope.modalInfo = modalInfo;

        angular.extend($scope, {
        center: {
            lng: -74.1796875,
            lat: 4.58737,
            zoom: 6
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
                lng: -74.1796875,
                lat: 4.58737,
                focus: true,
                draggable: false
            }
        }
    });

        $scope.$on('leafletDirectiveMap.map.click', function(event, args){

            vm.lat=args.leafletEvent.latlng.lat;
            vm.long=args.leafletEvent.latlng.lng;

            $scope.markers.onClickMarker.lat=vm.lat;
            $scope.markers.onClickMarker.lng=vm.long;

            vm.location=String(Math.round(vm.lat)+","+Math.round(vm.long));


            if(vm.kind == '0'){ // Weather info

                WeatherService.getWeather(vm.lat, vm.long).then(function (response) {

                    vm.city = response.data.name;
                    vm.temperature = Math.round(response.data.main.temp)/10;

                    vm.weather= response.data.weather[0].main+' / '+vm.temperature+"°C";
                    vm.message = 'The weather in '+vm.city+' is:';

                    console.log(response.data.main.temp);

                    modalInfo(vm.message, vm.weather);
                });

            }else if(vm.kind == '1'){ // UVI info

                WeatherService.getUVI(vm.location).then(function (response) {
                    vm.uvi= response.data.data;
                    vm.message = "The Ultraviolet Index in this Zone is:";

                    modalInfo(vm.message, vm.uvi);
                });

            }else if(vm.kind == '2'){

                WeatherService.getPollution(vm.location).then(function (response) {
                    vm.uvi= response.data.data[0].value;
                    vm.message = "The Pollution Data (CO2) in this Zone is:";
                    console.log(response);
                    modalInfo(vm.message, vm.uvi);
                });

            }

        });

        function modalInfo(message, data) {

            alert = $mdDialog.alert({
              title: message,
              textContent: data,
              ok: 'Close',
              clickOutsideToClose: true
            });

            $mdDialog
              .show( alert )
              .finally(function() {
                  alert = undefined;
              });
        }



  }

})();
