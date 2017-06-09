(function() {
  'use strict';

  describe('service weatherFactory', function() {

    var weatherFactory, $httpBackend, weatherApi, WEATHER_API, weatherEndPoint, uvEndpoint;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));

    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.when('GET', /(.*)\.json/).respond();
      WEATHER_API = $injector.get('WEATHER_API');
      weatherApi = 'http://api.openweathermap.org';
      weatherEndPoint = '/data/2.5/weather';
      uvEndpoint = '/v3/uvi/';
    }));


    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {

      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });

      it('should call the API', function () {
        //Arrange
        var lat = 6.18;
        var long = -75.59;
        var expectedResult = {"coord":{"lon":-75.59,"lat":6.18},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":299.54,"pressure":1016,"humidity":35,"temp_min":296.15,"temp_max":303.15},"wind":{"speed":7.2,"deg":180},"clouds":{"all":40},"dt":1496606400,"sys":{"type":1,"id":4261,"message":0.0038,"country":"CO","sunrise":1496573215,"sunset":1496618097},"id":3682631,"name":"Envigado","cod":200};

        //Act
        $httpBackend.expectGET( weatherApi + weatherEndPoint + '?APPID='+WEATHER_API+'&lat='+lat+'&lon='+long ).respond({data:expectedResult});

        var result = weatherFactory.getWeather(lat,long);
        //Assert

        result.query().$promise.then(function (response){
          var temp = response.data.main.temp;
          expect(temp).toBe(299.54);

        });
        $httpBackend.flush();
      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });

      it('should call the API', function () {

        //Arrange
        var latitude = 3.75;
        var longitude = -76.25;
        var expectedResult = {time: "2017-06-05T12:00:00Z", location: {latitude: 3.75, longitude: -76.25}, data: 14.58};

        //Act
        $httpBackend.expectGET( weatherApi + uvEndpoint + [latitude, longitude] + '/current.json?appid='+WEATHER_API ).respond(expectedResult);
        var result = weatherFactory.getUV();

        //Assert
        result.query({latlng: [latitude, longitude]}).$promise.then(function (response){
          var uv = response.data;
          expect(uv).toBe(14.58);

        });
        $httpBackend.flush();

      });


    });

  });
})();