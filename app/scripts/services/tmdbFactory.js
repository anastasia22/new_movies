'use strict';

angular.module('springMovies').factory('movieDatabase', ['$http', function($http) {
	var _baseUrl = "https://api.themoviedb.org/3/";
	var _apiKey = 'api_key=7a135ff2c408f8e138e4645f83b30222';

	var movies = {
		getMovieInfo: function(movieId) {
			return $http.get(_baseUrl+ 'movie/' + movieId + '&append_to_response=similar,images,trailers,credits?' + _apiKey);
		},
		getMovies: function() {
			
		}
	};
	return movies
}]);