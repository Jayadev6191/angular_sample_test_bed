weatherApp.controller('MainCtrl',['$scope','$resource','$routeParams','weatherService','renderChart',function($scope,$resource,$routeParams,weatherService,renderChart){	
	$scope.redirect=function(){
		$scope.link="https://github.com/novus/nvd3";
		window.location.href=$scope.link;
	};
	
	renderChart.renderUtilChart();
	
}]);