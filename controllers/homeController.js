weatherApp.controller('HomeCtrl',['$scope','$resource','weatherService',function($scope,$resource,weatherService){
	$scope.city=weatherService.city;
	
	// Watch city name and update city inside weatherService. It is read by mainController.
	
	$scope.a=10;
	$scope.$watch('city',function(){
		weatherService.city=$scope.city;
	});
	
	$scope.redirect=function(){
		$scope.link="#/main";
		window.location.href=$scope.link;
	};
	
}]);