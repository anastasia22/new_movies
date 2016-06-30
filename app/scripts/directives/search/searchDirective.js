'use strict';

angular.module('springmov').directive('search', function() {
	return {
		restrict: 'E',
		templateUrl: 'scripts/directives/search/search.html',
		controller: ('SearchController', SearchController)
	}
});

function SearchController ($scope) {
	$scope.searchObj = 'movie'
}

SearchController.$inject = ['$scope'];
