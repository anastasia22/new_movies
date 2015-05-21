'use strict';

angular.module('springMovies.movie', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/movie/:id', {
		    templateUrl: '../views/movie.html',
		    controller: 'movieController'
		})
	    
	 })

	.controller('movieController', ['movieDatabase', 'imageLinksService', '$routeParams', '$scope', 
		function(movieDatabase, imageLinksService, $routeParams, $scope) {
			movieDatabase.getMovieInfo($routeParams.id)
			.success(function(data){
				console.log(data)
				$scope.movie = data;
				$scope.poster = imageLinksService.largeImgLink(data.backdrop_path);
			}).error(function(){
				//code for not found movie
			})





	}]);
