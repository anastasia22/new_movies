'use strict'

angular.module('springMovies.movie', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/movie/:id', {
		    templateUrl: '../views/movie.html',
		    controller: 'movieController'

		})
	    
	 })

.controller('movieController', ['TMDB', function(TMDB) {
	console.log(TMDB)
}]);
