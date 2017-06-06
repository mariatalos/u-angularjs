describe('WeatherController', function() {
    beforeEach(module('angularApp'));

    var data = {};

    beforeEach(inject(function ($injector) {
        data.$controller = $injector.get('$controller');
        data.$rootScope = $injector.get('$rootScope');
        data.$q = $injector.get('$q');
        data.$mdDialog =  $injector.get('$mdDialog');
        data.$log =  $injector.get('$log');

        data.weatherMock = {
            getWeather: function(lat, lon){
                return {
                    query: function(){
                        data.queryDeferred = data.$q.defer();
                        return { $promise: data.queryDeferred.promise };
                    }
                };
            },
            getUV: function(lat, lon){
                return {
                    query: function(){
                        data.queryDeferred = data.$q.defer();
                        return { $promise: data.queryDeferred.promise };
                    }
                };
            },
        };

        data.mockArg = {
            args:{
                leafletEvent:{
                    latlng:{
                        lat: 40.245991504199026,
                        lng: -111.181640625
                    }
                }
            }
        };

        data.vm = data.$controller('WeatherController', {
            WeatherFactory : data.weatherFactoryMock,
            $scope: data.$rootScope,
            $mdDialog: data.$mdDialog,
            $log: data.$log
        });

    }));

    describe('Trigger click', function() {
        it('Shows weather info if kind = 0', function() {
            var $scope = {};
            var controller = $controller('WeatherController', { $scope: $scope });
            $scope.kind = 0;
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});