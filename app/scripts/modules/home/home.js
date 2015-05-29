'use strict';

angular.module('springMovies.home', [])

	.config(function($routeProvider) {
	  $routeProvider
		.when('/home', {
		    templateUrl: 'scripts/modules/home/home.html',
		    controller: 'homeController'
		})
		.when('/home/trailer/:param', {
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
			$scope.subview = false;
			$scope.currSlide = 0;
			$scope.showNextArrow = true;
			$scope.showPrevArrow = false;

			$scope.upcomingFilter = function(el) {
				return !el.poster;
			};
			$scope.newsFilter = function(el) {
				return !el.primary;
			};

			$scope.slide = function(dir) {
				if (dir === 'next') {
					$scope.NowPlaying[($scope.currSlide + 1)].isShown = true;
					$scope.NowPlaying[$scope.currSlide].isShown = false;
					++$scope.currSlide;
					if ($scope.currSlide === 1) {$scope.showPrevArrow = true}
					if ($scope.currSlide === 4) {$scope.showNextArrow = false}	
				} else if (dir === 'prev') {
					if ($scope.currSlide === 1) {$scope.showPrevArrow = false}
					if ($scope.currSlide === 4) {$scope.showNextArrow = true}	
					$scope.NowPlaying[($scope.currSlide - 1)].isShown = true;
					$scope.NowPlaying[$scope.currSlide].isShown = false;
					--$scope.currSlide;
				}
			};
			
			$scope.showTrailer = function(url){
				$scope.subview = !$scope.subview;
			};

			if ($routeParams.param) {
				$scope.showTrailer($routeParams.param);
				$scope.params = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $routeParams.param);
			} else {
				$scope.params = ''
			}

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
