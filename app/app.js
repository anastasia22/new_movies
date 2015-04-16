'use strict'

var springMovies = angular.module('springMovies',[]);

springMovies.directive('search', function() {
	return {
		restrict: 'E',
		templateUrl: '../views/search.html'
	}
});

springMovies.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: '../views/header.html'
	}
});

springMovies.directive('footer', function() {
	return {
		restrict: 'E',
		templateUrl: '../views/footer.html'
	}
});

