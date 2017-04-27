app.service('weatherInfo', function() {

    vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';

    this.weather = function (lat, long) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+vm.apiKey
        }).then(function successCallback(response) {
            return response.data.name;

        }, function errorCallback(response) {
            alert('Error');
        });

    }
});