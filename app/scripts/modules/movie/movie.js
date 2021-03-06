'use strict';

angular.module('springmov.movie', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/movie/:id', {
		    templateUrl: 'scripts/modules/movie/movie.html',
		    controller: 'movieController'
		})

	 })

	.controller('movieController', ['db', 'imageLinksService', '$routeParams', '$scope',
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
