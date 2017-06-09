describe('WeatherController', function() {
    beforeEach(module('angularApp'));

    var test = {};

    beforeEach(inject(function ($injector) {
        test.$controller = $injector.get('$controller');
        test.$rootScope = $injector.get('$rootScope');
        test.$q = $injector.get('$q');
        test.$mdDialog =  $injector.get('$mdDialog');
        test.$log =  $injector.get('$log');
        test.scope = test.$rootScope.$new();

        test.weatherMock = {
            getWeather: function (lat, lon) {
                return {
                    query: function () {
                        return { $promise: test.$q.resolve({
                            name: 'Pereira',
                            weather: [{ description:'Its a hell outside' }],
                            main: { temp: 32 }
                        })};
                    }
                }
            },
            getUV: function (lat, lon) {
                return {
                    query: function () {
                        return { $promise: test.$q.resolve({
                            data: 26.89
                        })};
                    }
                }
            }
        };

        test.mockArguments = {
            args: {
                leafletEvent: {
                    latlng: {
                        lat: 3.75,
                        lng: -76.25
                    }
                }
            }
        };

        test.vm = test.$controller('WeatherController', {
            WeatherFactory: test.weatherMock,
            $mdDialog: test.$mdDialog,
            $log: test.$log,
            $scope: test.scope,
        });


    }));

    afterEach(function () {
        spec = {};
    });

    afterAll(function () {
        spec = null;
    });


    describe('Trigger click', function() {
        it('If kind = 0 should return weather data successfully', function() {
            //Arrange:
            test.vm.kind = 0;
            var event = {};

            //Act:
            spyOn(test.weatherMock, 'getWeather').and.callThrough();
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getWeather).toHaveBeenCalled();
            expect(test.vm.response.success).toBe(true);
            expect(test.vm.response.place).toBe('Pereira');
            expect(test.vm.response.weather).toBe('Its a hell outside');
            expect(test.vm.response.temp).toBe(32);
        });

        it('If kind = 0 but getweather does not brings any data', function() {
            //Arrange:
            test.vm.kind = 0;
            var event = {};

            //Act:
            spyOn(test.weatherMock, 'getWeather').and.callFake(function() {
                return {
                    query: function () {
                        return { $promise: test.$q.resolve({
                            success: false,
                            name: undefined,
                            weather: undefined,
                            main: undefined
                        })};
                    }
                }
            });
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getWeather).toHaveBeenCalled();
            expect(test.vm.response.success).toBe(false);
            expect(test.vm.response.place).toBeUndefined();
            expect(test.vm.response.weather).toBeUndefined();
            expect(test.vm.response.temp).toBeUndefined();
        });

        it('If kind = 0 but the call to getWeather is rejected', function() {
            //Arrange:
            test.vm.kind = 0;
            var event = {};

            //Act:
            spyOn(test.$log, 'debug').and.callThrough();
            spyOn(test.weatherMock, 'getWeather').and.callFake(function() {
                return {
                    query: function () {
                        return { $promise: test.$q.reject()};
                    }
                }
            });
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getWeather).toHaveBeenCalled();
            expect(test.$log.debug).toHaveBeenCalled();
        });

        it('If kind = 1 should return UV data successfully', function() {
            //Arrange:
            test.vm.kind = 1;
            var event = {};

            //Act:
            spyOn(test.weatherMock, 'getUV').and.callThrough();
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getUV).toHaveBeenCalled();
            expect(test.vm.response.success).toBe(true);
            expect(test.vm.response.uv).toBe(26.89);
        });

        it('If kind = 1 but getUV does not brings any data', function() {
            //Arrange:
            test.vm.kind = 1;
            var event = {};

            //Act:
            spyOn(test.weatherMock, 'getUV').and.callFake(function() {
                return {
                    query: function () {
                        return { $promise: test.$q.resolve({
                            success: false,
                            uv: undefined
                        })};
                    }
                }
            });
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getUV).toHaveBeenCalled();
            expect(test.vm.response.success).toBe(false);
            expect(test.vm.response.uv).toBeUndefined();
        });

        it('If kind = 0 but the call to getWeather is rejected', function() {
            //Arrange:
            test.vm.kind = 1;
            var event = {};

            //Act:
            spyOn(test.$log, 'debug').and.callThrough();
            spyOn(test.weatherMock, 'getUV').and.callFake(function() {
                return {
                    query: function () {
                        return { $promise: test.$q.reject()};
                    }
                }
            });
            test.vm.triggerClick(event, test.mockArguments.args);
            test.$rootScope.$apply();

            //Assert:
            expect(test.weatherMock.getUV).toHaveBeenCalled();
            expect(test.$log.debug).toHaveBeenCalled();
        });

    });
});