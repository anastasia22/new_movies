'use strict';

angular.module('springMovies.home', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/', {
		    templateUrl: '../views/home.html',
		    controller: 'homeController'
		})
	    
	 })

	.controller('homeController', ['movieDatabase', 'imageLinksService', '$routeParams', '$scope', 
		function(movieDatabase, imageLinksService, $routeParams, $scope) {
			




	}]);
