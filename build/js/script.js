var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);

//routes

weatherApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.htm',
        controller: 'HomeCtrl'
      }).when('/main', {
        templateUrl: 'partials/main.htm',
        controller: 'MainCtrl'
      }).when('/main/:days', {
        templateUrl: 'partials/main.htm',
        controller: 'MainCtrl'
      });
});




weatherApp.factory('renderChart',function(){
	return {
		renderUtilChart:function(){
		console.log('renderChart called inside');
		function data() {
		  var sin = [],
		      cos = [];
		
		  for (var i = 0; i < 100; i++) {
		    sin.push({x: i, y: Math.sin(i/5)});
		  }
		
		  return [
		    {
		      values: sin,
		      key: 'Sine Wave',
		      color: '#a27f00'
		    },
		    
		  ];
		}

		nv.addGraph(function(){
		  var chart = nv.models.lineChart()
		  	.showXAxis(true)
		  	.showYAxis(true)
		    .interactive(true)
		    .tooltips(true)
		    .showLegend(false);
		    
		  chart.xAxis
		    .axisLabel('Time (ms)')
		    .tickFormat(d3.format(',r'));
		
		  chart.yAxis
		    .axisLabel('Voltage (v)')
		    .tickFormat(d3.format('.02f'));
		
		  d3.select('#chart svg')
		    .datum(data())
		    .transition().duration(500)
		    .call(chart);
		
		  nv.utils.windowResize(chart.update);
		
		  return chart;
		  });
		}
	};
});

weatherApp.service('weatherService',[function(){
	// rest call
	this.city="Santa Clara,CA";
	console.log('weather service called');
	
}]);

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
	
	$scope.reload=function(){
		$scope.a=10;
		location.reload();
	};
	
}]);
weatherApp.controller('MainCtrl',['$scope','$resource','$routeParams','weatherService','renderChart',function($scope,$resource,$routeParams,weatherService,renderChart){	
	$scope.redirect=function(){
		$scope.link="https://github.com/novus/nvd3";
		window.location.href=$scope.link;
	};
	
	renderChart.renderUtilChart();
	
}]);