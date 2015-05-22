'use strict';

angular.module('springMovies.home', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/', {
		    templateUrl: '../views/home.html',
		    controller: 'homeController'
		})
	    
	 })

	.controller('homeController', ['movieDatabase', 'imageLinksService', 'newsFactory', '$routeParams', '$scope', 
		function(movieDatabase, imageLinksService, newsFactory, $routeParams, $scope) {
			
			var homeMovies = ['upcoming', 'popular', 'topRated', 'nowPlaying'];

			homeMovies.map(function(movieType){
				movieDatabase.getHomeMovies(movieType)
					.success(function(data){
						$scope[movieType] = data;
						//code to shoose random from 20 array
						// $scope.upcomingPoster = imageLinksService.largeImgLink(data.results[0].poster_path)
					})
					.error(function(){});
			});

console.log($scope)
			movieDatabase.getPopularPersons().success(function(data) {
				// console.log(data)
			}).error(function() {

			});

			newsFactory.getNews().success(function(data){
				// console.log(data);
			}).error(function(){

			});

			// $scope.nowPlaying.results.slice(0, 3);
			// 


	}]);
