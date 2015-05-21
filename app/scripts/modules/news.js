'use strict';

angular.module('springMovies.news', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/news', {
		    templateUrl: '../views/news.html',
		    controller: 'newsController'
		})
	    
	 })

	.controller('newsController', ['$scope', 'newsFactory',
		function($scope, newsFactory) {
			newsFactory.getNews()
			.success(function(data){
				console.log(data)
			}).error(function(){
				//code for not found movie
			})



	}]);
