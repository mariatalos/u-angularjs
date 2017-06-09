(function() {
  'use strict';

  describe('HomeController', function() {
    var suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      suite.$controller = $injector.get('$controller');
    }));

    it('should be registered', function() {
      expect(suite.vm).not.toEqual(null);
    });

  });
})();