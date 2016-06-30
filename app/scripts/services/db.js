'use strict';

angular.module('springmov').factory('movieDatabase', ['$http', function($http) {
	var _baseUrl = "https://api.themoviedb.org/3/";
	var _apiKey = 'api_key=7a135ff2c408f8e138e4645f83b30222';

	return {
		getMovieInfo: function(movieId) {
			return $http.get(_baseUrl+ 'movie/' + movieId + '?'+ _apiKey);
		},
		getFullMovieInfo: function(movieId) {
			return $http.get(_baseUrl+ 'movie/' + movieId + '?' + _apiKey + '&append_to_response=trailers,overviews');
		},
		getHomeMovies: function(type) {
			var movies;
			switch(type) {
				case 'Upcoming':
					movies = $http.get(_baseUrl + 'movie/upcoming' + '?' + _apiKey)
				break;
				case 'TopRated':
					movies = $http.get(_baseUrl + 'movie/top_rated' + '?' + _apiKey)
				break;
				case 'NowPlaying':
					movies = $http.get(_baseUrl + 'movie/now_playing' + '?' + _apiKey)
				break;
			};

			return movies;
		},
		getCelebrities: function() {
			return $http.get(_baseUrl + 'person/popular' + '?' + _apiKey);
		},
		discoverMovies: function(kind, genre, type) {
			var url = 'discover/';
			switch (kind) {
	            case 'movies':
	                url +='movie?';
	            break;
	            case 'tvshows':
	                url +='tv?';
	            break;
	            default:
					url +=null
	        };

			switch (genre) {
	            case 'adventure':
	                url +='with_genres=12';
	            break;
	            case 'comedy':
	                url +='with_genres=35';
	            break;
	            case 'documentary':
	                url +='with_genres=99';
	            break;
	            case 'drama':
	                url +='with_genres=18';
	            break;
	            case 'fantasy':
	                url +='with_genres=14';
	            break;
	            case 'for-kids':
	                url +='with_genres=16,10751';
	            break;
	            case 'horror':
	                url +='with_genres=27';
	            break;
	            case 'romance':
	                url +='with_genres=10749';
	            break;
	            case 'thriller':
	                url +='with_genres=53';
	            break;
	            default:
	            url +=null;
	        };

	        switch (type) {
	            case 'popular':
	                url +='&sort_by=popularity.desc';
	            break;
	            case 'latest':
	                url += (kind==='movies' ? '&sort_by=primary_release_date.desc' : '&sort_by=first_air_date.desc');
	            break;
	            default:
	            url +=null;
	        };

	        return ($http.get(_baseUrl + url + '&' + _apiKey));
		}
	};
}]);

angular.module('springmov').factory('newsDatabase', ['$http', function($http) {
	var _baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Movies") AND type_of_material:("News")&sort=newest&api-key=c3b06d2b0936ccb5547a877c765a49a5:1:70730185&page=1'

	return {
		getNews : function() {
			return $http.get(_baseUrl);
		}
	};
}]);
