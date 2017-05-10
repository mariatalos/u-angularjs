(function () {
    'use strict';

    angular
        .module('angularApp')
        .service('WeatherService', WeatherService);

    /** @ngInject */
    function WeatherService($http) {

        var vm = this;
        vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';

        return {
            getWeather: getWeather,
            getUVI: getUVI,
            getPollution: getPollution
        };

        function getWeather(lat, lng) {
            return $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID='+vm.apiKey).then(function (response) {
                return response;
            });
        }

        function getUVI(location) {
            return $http.get('http://api.openweathermap.org/v3/uvi/'+location+'/current.json?appid='+vm.apiKey).then(function (response) {
                return response;
            });
        }

        function getPollution(location) {
            return $http.get('http://api.openweathermap.org/pollution/v1/co/'+location+'/current.json?appid='+vm.apiKey).then(function (response) {
                return response;
            });
        }

    }


})();

