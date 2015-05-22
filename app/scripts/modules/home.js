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
			movieDatabase.getHomeMovies('upcoming')
			.success(function(data){
				// console.log(data);
				$scope.upcoming = data;
				//code to shoose random from 20 array
				$scope.upcomingPoster = imageLinksService.largeImgLink(data.results[0].poster_path)
			})
			.error(function(){});

			movieDatabase.getHomeMovies('popular')
			.success(function(data){
				// console.log(data);
				$scope.popular = data;
				$scope.popularPoster = imageLinksService.largeImgLink(data.results[0].poster_path)
			})
			.error(function(){});

			movieDatabase.getHomeMovies('top_rated')
			.success(function(data){
				// console.log(data);
				$scope.top_rated = data;
				$scope.topRatedPoster = imageLinksService.largeImgLink(data.results[0].poster_path)
			})
			.error(function(){});

			movieDatabase.getHomeMovies('now_playing')
			.success(function(data){
				// console.log(data);
				$scope.now_playing = data;
				$scope.nowPlayingPoster = imageLinksService.largeImgLink(data.results[0].poster_path)
			})
			.error(function(){});

			movieDatabase.getPopularPersons().success(function(data) {
				console.log(data)
			}).error(function() {

			});

			newsFactory.getNews().success(function(data){
				console.log(data);
			}).error(function(){

			});


	}]);
