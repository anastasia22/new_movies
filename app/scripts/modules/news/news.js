'use strict';

angular.module('springmov.news', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/news', {
		    templateUrl: 'scripts/modules/news/news.html',
		    controller: 'newsController'
		})
	 })
	.controller('newsController', ['$scope', 'newsDatabase',
		function($scope, newsDatabase) {
			newsDatabase.getNews()
			.success(function(data){
				console.log(data);
			}).error(function(){
				//code for not found movie
			})



	}]);
