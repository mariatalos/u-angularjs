(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
    }));


    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });
    });

  });
})();