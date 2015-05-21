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