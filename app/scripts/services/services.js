'use strict';

angular.module('springMovies').factory('imageLinksService', [function() {
	var _giantImageUrl = 'http://image.tmdb.org/t/p/w1280/';
	var _hyperImageUrl = 'http://image.tmdb.org/t/p/w780/';
	var _largeImageUrl = 'http://image.tmdb.org/t/p/w300/';
	var _mediumImageUrl = 'http://image.tmdb.org/t/p/w185/';
	var _littleImageUrl = 'http://image.tmdb.org/t/p/w154/';
	var _smallImageUrl = 'http://image.tmdb.org/t/p/w92/';
	var _miniImageUrl = 'http://image.tmdb.org/t/p/w45/';

	return {
		miniImgLink : function(path) {
			return _miniImageUrl + path;
		},
		smallImgLink : function(path) {
			return _smallImageUrl + path;
		},
		littleImgLink : function(path) {
			return _littleImageUrl + path;
		},
		mediumImgLink : function(path) {
			return _mediumImageUrl + path;
		},
		largeImgLink : function(path) {
			return _largeImageUrl + path;
		},
		hyperImgLink : function(path) {
			return _hyperImageUrl + path;
		},
		giantImgLink : function(path) {
			return _giantImageUrl + path;
		}
	};
}]);



angular.module('springMovies').factory('timeFactory', function() {
	var monthes = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	return {
		//receive '2015-05-15', returns '15 May, 2015'
		getHomePageDateFormat: function(movieDate) {
			var date, month, year,
				d = new Date(movieDate);
			date = d.getDate();
			month = monthes[d.getMonth()];
			year = d.getFullYear();
			return date + ' ' + month + ', ' + year;
		},
		getMoviesDateFormat: function(movieDate) {
			var date, month, year,
				d = new Date(movieDate);
			date = d.getDate();
			month = d.getMonth() + 1;
			if (month < 10) {
				month = '' + 0 + month;
			}
			year = d.getFullYear();
			return date + '.' + month + '.' + year;
		},
		getNewsDateFormat: function(newsDate) {
			var hours, minutes,
				d = new Date(newsDate);
			hours = d.getHours();

			minutes = d.getMinutes();
			if (minutes<10) {
				minutes= '' + 0 + minutes
			}
			return hours + ':' + minutes + ', ' + this.getHomePageDateFormat(newsDate);

		}
			
	}
});

angular.module('springMovies.home').factory('homeFactory', ['movieDatabase', 'imageLinksService', 'timeFactory', 
	function(movieDatabase, imageLinksService, timeFactory) {
		return {
			checkPopPersons: function(persons) {
				return persons.map(function(person){
					person.profile = imageLinksService.mediumImgLink(person.profile_path);
					person.movie = person.known_for[0];
					return person
				})
			},
			modifyNowPlaying: function(data) {
				var movies = data.results.slice(0, 3);
				return movies.map(function(movie){
					var mov = {
						id: movie.id,
						title: movie.title,
						vote: movie.vote_average,
						poster: imageLinksService.giantImgLink(movie.backdrop_path),
						year: movie.release_date.substring(0, movie.release_date.indexOf("-")),
						fullDate: timeFactory.getHomePageDateFormat(movie.release_date)
					};
					movieDatabase.getFullMovieInfo(movie.id).success(function(data){
						mov.genres = data.genres;
						mov.runtime = data.runtime;
						mov.countries = data.production_countries;
						mov.trailer = data.trailers.youtube[0].source;
					}).error();
					return mov;
				});
			},
			modifyUpcoming: function(data) {
				var movies = data.results.slice(0, 4);
				return  movies.map(function(movie, index) {
					movie.fullDate = timeFactory.getHomePageDateFormat(movie.release_date);
					if (index === 0) {
						movie.poster = imageLinksService.littleImgLink(movie.poster_path)
					} 
					return movie;
				});
			},
			modifyTopRated: function(data) {
				var movies = data.results.slice(0, 6);
				return  movies.map(function(movie) {
					movie.poster = imageLinksService.smallImgLink(movie.poster_path);
					movieDatabase.getFullMovieInfo(movie.id).success(function(data){
						movie.genres = data.genres
					});
					return movie;
				});
			},
			modifyDiscovers: function(movies) {
				return movies.map(function(movie){
					movie.poster = imageLinksService.mediumImgLink(movie.poster_path);
					movie.fullDate = timeFactory.getMoviesDateFormat(movie.release_date || movie.first_air_date);
					return movie
				})
			},
			modifyNews: function(news) {
				return news.map(function(novel) {
					novel.date = timeFactory.getNewsDateFormat(novel.pub_date);
					return novel;
				});
			}
		}
	
}]);