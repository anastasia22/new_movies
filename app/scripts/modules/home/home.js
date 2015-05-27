'use strict';

angular.module('springMovies.home', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/home', {
		    templateUrl: 'scripts/modules/home/home.html',
		    controller: 'homeController'
		})
	    
	 })
	.filter('html',function($sce){
	    return function(input){
	        return $sce.trustAsHtml(input);
	    }
	})

	.controller('homeController', ['movieDatabase', 'newsDatabase', 'homeFactory', '$routeParams', '$scope', '$sce',
		function(movieDatabase, newsDatabase, homeFactory, $routeParams, $scope, $sce) {
			
			var homePageMovies = ['Upcoming', 'TopRated', 'NowPlaying'];
			$scope.discoverType= 'popular';
			$scope.discoverKind= 'movies';
			$scope.discoverGenre= 'fantasy';

			$scope.upcomingFilter = function(el) {
				return !el.poster;
			};
			$scope.newsFilter = function(el) {
				return !el.primary;
			};

			$scope.checkDiscover = function() {
				movieDatabase.discoverMovies($scope.discoverKind, $scope.discoverGenre, $scope.discoverType).success(function(data) {
					$scope.discovers = homeFactory.modifyDiscovers(data.results);
				}).error(function(){
					$scope.hideDiscovers = true;
				});
			};
			$scope.checkDiscover();

			// receiving home page movies
			homePageMovies.map(function(movieType){
				movieDatabase.getHomeMovies(movieType)
					.success(function(data){
						$scope[movieType] = homeFactory['modify' + movieType](data);
					})
					.error(function(){
						$scope['hide' + movieType] = true;
					});
			});
			// receiving popular persons info
			movieDatabase.getPopularPersons().success(function(data) {
				$scope.popPersons = homeFactory.checkPopPersons(data.results.slice(0,6));
			}).error(function() {
				$scope.hidePopPersons= true;
			});
			// receiving news
			newsDatabase.getNews().success(function(data){
				var news = data.response.docs.filter(function(el){
					return !!el.multimedia.length;
				}).slice(0,4);
				news[0].primary = true;
				$scope.news =  homeFactory.modifyNews(news);
			}).error(function(){
				$scope.hideNews = true;
			});

			
	}]);
