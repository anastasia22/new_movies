'use strict'

var springMovies = angular.module('springMovies',[]);

springMovies.directive('search', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/search.html',
		controller: 'searchCont'
	}
});

springMovies.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/header.html',
		controller: 'headerCont'
	}
});

springMovies.directive('footer', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/footer.html',
		controller: 'footerCont'
	}
});

