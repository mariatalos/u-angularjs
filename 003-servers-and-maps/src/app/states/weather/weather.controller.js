(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog) {
        var vm = this;

        //Talos API Key
        vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
        vm.kind = '0';

        var alert;
        $scope.modalInfo = modalInfo;

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

                $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather?lat='+vm.lat+'&lon='+vm.long+'&APPID='+vm.apiKey
                }).then(function successCallback(response) {

                    vm.city = response.data.name;
                    vm.weather= response.data.weather[0].main;

                    console.log(response.data);
                    console.log(vm.city, vm.weather);


                    modalInfo(vm.city, vm.weather);

                }, function errorCallback(response) {
                    alert('Error');
                });

                //$scope.data = weatherInfo.weather(vm.lat, vm.long);




            }else if(vm.kind == '1'){
                console.log("uvi");
                //http://api.openweathermap.org/v3/uvi/{lat},{lon}./current.json?appid={your-api-key}
            }else if(vm.kind == '2'){
                //http://api.openweathermap.org/pollution/v1/co/{location}/current.json?appid={api_key}
            }

        });

        function modalInfo(city, weather) {

            var parentEl = angular.element(document.body);

            alert = $mdDialog.alert({
              title: 'The weather in '+ city +" is:",
              textContent: weather,
              ok: 'Close'
            });

            $mdDialog
              .show( alert )
              .finally(function() {
                  alert = undefined;
              });
        }

  }

})();
