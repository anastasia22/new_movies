'use strict';

angular.module('springMovies').factory('TMDB', ['$http', function($http) {
	var _baseUrl = "https://api.themoviedb.org/3/";
	var _apiKey = 'api_key=7a135ff2c408f8e138e4645f83b30222';

	var movies = {
		getMovie : function() {
			return $http.get(_baseUrl+ 'movie/' + id + '?' + _apiKey);
		}
	};
	return movies
}]);