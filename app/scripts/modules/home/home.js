'use strict';

angular.module('springmov.home', [])

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
	.controller('homeController', ['movieDatabase', 'newsDatabase', 'homeFactory',
		'slidebanner', '$routeParams', '$scope', '$sce',
		function(movieDatabase, newsDatabase, homeFactory, slidebanner, $routeParams,
			$scope, $sce, list) {

			var homePageMovies = ['Upcoming', 'TopRated', 'NowPlaying'];
			$scope.discoverType= 'popular';
			$scope.discoverKind= 'movies';
			$scope.discoverGenre= 'fantasy';
			$scope.q = {NowPlaying: 5, Upcoming: 4, TopRated: 7};
			$scope.subview = false;
			$scope.currSlide = 0;
			$scope.showNextArrow = true;
			$scope.showPrevArrow = false;

			$scope.upcomingFilter = function(el) {
				return !el.poster;
			};

			//change nowplay movie in container
			$scope.slideNowplay = function(param) {
				if (param === 'next') {
					param = $scope.currSlide + 1;
				} else if (param === 'prev') {
					param = $scope.currSlide - 1;
				};
				var output = slidebanner.slide($scope.NowPlaying, $scope.currSlide, param);
				$scope.currSlide = output.curr;
				$scope.showNextArrow = output.next;
				$scope.showPrevArrow = output.prev;
				$scope.NowPlaying = output.data;
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

			//change data in discover block
			$scope.checkDiscover = function() {
				movieDatabase.discoverMovies($scope.discoverKind, $scope.discoverGenre, $scope.discoverType).success(function(data) {
					$scope.discovers = homeFactory.modifyDiscovers(data.results,$scope.q.Discovers);
					initGallery();
				}).error(function(){
					$scope.hideDiscovers = true;
				});
			};
			$scope.checkDiscover();

			// receiving home page movies info
			homePageMovies.map(function(movieType){
				movieDatabase.getHomeMovies(movieType)
					.success(function(data){
						$scope[movieType] = homeFactory['modify' + movieType](data, $scope.q[movieType]);
					})
					.error(function(){
						$scope['hide' + movieType] = true;
					});
			});
			// receiving popular persons info
			movieDatabase.getCelebrities().success(function(data) {
				$scope.celebrities = homeFactory.checkCelebrities(data.results.slice(0,6));
			}).error(function() {
				$scope.hideCelebrities= true;
			});
			// receiving news
			newsDatabase.getNews().success(function(data){
				var news = data.response.docs.filter(function(el){
					return !!el.multimedia.length;
				}).slice(0,3);
				$scope.news =  homeFactory.modifyNews(news);
				console.log($scope.news);
			}).error(function(){
				$scope.hideNews = true;
			});

			//drag carousel
			function initGallery() {
				var isDrag,
						el = $('#bla'),
						leftFlag,
						left,
						initPos= {},
						diffPos= {};
						el.width = $scope.discovers.length * $($('.discover__result')[0]).outerWidth(true);
				function onMouseDown(ev) {
					ev.preventDefault();
					isDrag = true;
					initPos.x = ev.clientX;
					leftFlag = parseInt(el.css('left'));
					console.log('mousedown started', event);
				}
				function onMouseMove(ev) {
					ev.preventDefault();
					console.log(isDrag);
					if (isDrag) {
						left = leftFlag + ev.clientX - initPos.x;
						if (left > 0) {left = 0};
						// if (l >)

						el.css('left', left);

					}
				}
				function onMouseUp(ev) {
					isDrag = false;
					leftFlag = false;
					console.log('mouseup started', event);
				}
				el.on('mousedown', onMouseDown);
				el.on('mousemove', onMouseMove);
				$(document).on('mouseup', onMouseUp);
			};
	}]);
;
