'use strict';

angular.module('springMovies').factory('movieDatabase', ['$http', function($http) {
	var _baseUrl = "https://api.themoviedb.org/3/";
	var _apiKey = 'api_key=7a135ff2c408f8e138e4645f83b30222';

	var movies = {
		getMovieInfo: function(movieId) {
			return $http.get(_baseUrl+ 'movie/' + movieId + '&append_to_response=similar,images,trailers,credits?' + _apiKey);
		},
		getHomeMovies: function(type) {
			var movies;
			switch(type) {
				case 'popular':
					movies = $http.get(_baseUrl + 'movie/popular' + '?' + _apiKey)
				break;
				case 'upcoming':
					movies = $http.get(_baseUrl + 'movie/upcoming' + '?' + _apiKey)
				break;
				case 'top_rated':
					movies = $http.get(_baseUrl + 'movie/top_rated' + '?' + _apiKey)
				break;
				case 'now_playing':
					movies = $http.get(_baseUrl + 'movie/now_playing' + '?' + _apiKey)
				break;
				default:
					null
			};

			return movies;
		},
		getMoviesWithGenre: function(genre) {
			var genreUrl;
			switch (genre) {
	            case 'popular':
	                genreUrl='discover/movie?sort_by=popularity.desc';
	            break;
	            case 'adventure':
	                genreUrl='discover/movie?with_genres=12&sort_by=popularity.desc';
	            break;
	            case 'comedy':
	                genreUrl='discover/movie?with_genres=35&sort_by=popularity.desc';
	            break;
	            case 'documentary':
	                genreUrl='discover/movie?with_genres=99&sort_by=popularity.desc';
	            break;
	            case 'drama':
	                genreUrl='discover/movie?with_genres=18&sort_by=popularity.desc';
	            break;  
	            case 'fantasy':
	                genreUrl='discover/movie?with_genres=14&sort_by=popularity.desc';
	            break;    
	            case 'for-kids':
	                genreUrl='discover/movie?with_genres=16,10751&sort_by=popularity.desc';
	            break;
	            case 'horror':
	                genreUrl='discover/movie?with_genres=27&sort_by=popularity.desc';
	            break;
	            case 'romance':
	                genreUrl='discover/movie?with_genres=10749&sort_by=popularity.desc';
	            break;  
	            case 'thriller':
	                genreUrl='discover/movie?with_genres=53&sort_by=popularity.desc';
	            break;
	            default:
	            null;
	        };
	        return ($http.get(_baseUrl + genreUrl + _apiKey));
		},
		getPopularPersons: function() {
			return $http.get(_baseUrl + 'person/popular' + '?' + _apiKey)
		}
	};
	return movies
}]);


/*
{
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },{
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 10769,
      "name": "Foreign"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
*/
















