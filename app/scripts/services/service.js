'use strict';

angular.module('springMovies').factory('imageLinksService', [function() {
	var _hyperImageUrl = 'http://image.tmdb.org/t/p/w780/';
	var _largeImageUrl = 'http://image.tmdb.org/t/p/w300/';
	var _mediumImageUrl = 'http://image.tmdb.org/t/p/w185/';
	var _smallImageUrl = 'http://image.tmdb.org/t/p/w92/';

	var createImgPath = {
		smallImgLink : function(path) {
			return _smallImageUrl + path;
		},
		mediumImgLink : function(path) {
			return _mediumImageUrl + path;
		},
		largeImgLink : function(path) {
			return _largeImageUrl + path;
		},
		hyperImgLink : function(path) {
			return _hyperImageUrl + path;
		}
	};
	return createImgPath;
	
}]);

angular.module('springMovies').factory('newsFactory', ['$http', function($http) {
	var _baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Movies") AND type_of_material:("News")&sort=newest&api-key=c3b06d2b0936ccb5547a877c765a49a5:1:70730185&page='

	var news = {
		getNews : function(page) {
			var page = page || 1
			return $http.get(_baseUrl  + page );
		}
	};
	return news;
	
}]);