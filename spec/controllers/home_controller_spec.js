describe("HomeCtrl",function(){
	var $rootScope,
		$scope,
		controller,
		mockWeatherService;
	
	beforeEach(function(){
		module('weatherApp');
		
		inject(function($injector){
			$rootScope=$injector.get('$rootScope');
			$scope=$rootScope.$new();
			controller=$injector.get('$controller')('HomeCtrl',{$scope:$scope});
		});
	});
	
	describe('city to be defined',function(){
		it('city should always be defined',function(){
			expect($scope.city).toBeDefined();
		});
	});

	
	describe('redirect',function(){
		it('should redirect to stackoverflow website',function(){
			$scope.redirect();
			expect($scope.link).toEqual("#/main");
		});
	});
	
	describe('check',function(){
		var spyEvent;
		var handlers,
			elem;
			
	
		beforeEach(function() {
			// elem=$('<div id="container"><p>Hello</p></div>');
			setFixtures('<div id="container"><p>Hello</p></div>');
		}); 

		it('should have a redirect link which is set',function(){
			spyEvent = spyOnEvent('#container_2', 'click');
			$('#reload').click();
			// expect(elem).toEqual('div#container');
			// expect(elem).toContainText('Hello');
			expect('click').toHaveBeenTriggeredOn($('#container'));
			expect(spyEvent).toHaveBeenTriggered();
		});
	});
	
});
