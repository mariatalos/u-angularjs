(function() {
  'use strict';

  describe('directive card', function() {

  	var compile, rootScope, element, template;
   
    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {

    	//Cache card directive:
		var htmlTemplate = $templateCache.get('app/components/card/card.html');
		$templateCache.put('app/components/card/card.html', htmlTemplate);

		compile = $injector.get('$compile');
		rootScope = $injector.get('$rootScope');

		rootScope.card = {
			title: '',
			description: '',
			background: '',
			textColor: '',
			icon: '',
			favorite: function () {
				return true;
			},
			reservedBy: '© Practice 008, Talos University'
		};

		template =
			'<card title="card.title"' +
			'description="card.description"' +
			'background="card.background"' +
			'text-color="card.textColor"' +
			'reserved-by="{{card.reservedBy}}"' +
			'cb-favorite="card.favorite(title)"' +
			'icon="{{card.icon}}">' +
			'</card>';
	}));

      afterEach(function () {
          //element.remove();
          element = undefined;
          template = undefined;
      });

      it('when load the page, the card should be with empty params', function () {
          element = compile(angular.element(template))(rootScope);
          rootScope.$digest();

          expect(element.find('.title').text()).toEqual('');
          expect(element.find('.description').text()).toEqual('');
          expect(element.find('.icon').text()).toEqual('');
          expect(element.find('.background').text()).toEqual('');
          expect(element.find('.textColor').text()).toEqual('');
          expect(element.find('.reservedBy').text()).toEqual(rootScope.card.reservedBy);
      });

      it('when render the directive, show card with no errors', function () {
          rootScope.card = {
              title: 'María Paz Muñoz',
              description: 'Engineer, developer, and software project leader, specialized in front-end development and UI/UX design.',
              background: '#1DE9B6',
              textColor: '#FFFFFF',
              icon: 'account_circle',
              favorite: function () {
                  return true;
              },
              reservedBy: '© Practice 008, Talos University'
          };

          element = compile(angular.element(template))(rootScope);
          rootScope.$digest();

          spyOn(rootScope.card, 'favorite');

          expect(element.find('.title').text()).toEqual(rootScope.card.title);
          expect(element.find('.description').text()).toEqual(rootScope.card.description);
          expect(element.find('.icon').text()).toEqual(rootScope.card.icon);
          expect(element.find('.reservedBy').text()).toEqual(rootScope.card.reservedBy);
          element.find('.favorite').click();
          expect(rootScope.card.favorite).toHaveBeenCalledWith(rootScope.card.title);

          setTimeout(function () {
              expect(element.find('.card').css('color')).toEqual(rootScope.card.textColor);
              expect(element.find('.card').css('background-color')).toEqual(rootScope.card.background);
          }, 200);
          //clearTimeout();
      });
  });
})();