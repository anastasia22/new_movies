'use strict';

angular.module('springMovies.movies', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/movies/:types', {
		    templateUrl: 'scripts/modules/movies/movies.html',
		    controller: 'moviesController'
		})
	    
	 })

	.controller('moviesController', ['movieDatabase', 'imageLinksService', '$routeParams', '$scope', 
		function(movieDatabase, imageLinksService, $routeParams, $scope) {
			movieDatabase.getMoviesWithGenre($routeParams.types)
			.success(function(data){
				console.log(data)
			}).error(function(){
				//code for not found movie
			})





	}]);
