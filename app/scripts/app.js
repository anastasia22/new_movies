'use strict';

angular.module('springMovies', [
	'ngRoute'
])


.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '../views/main_page.html'/*,*/
    //controller: 'Controller'
  })
   .when('/movies', {
    templateUrl: '../views/movies.html'/*,*/
    //controller: 'Controller'
  })
  .when('/movie/:id', {
    templateUrl: '../views/movie.html'/*,*/
    //controller: 'Controller'
  })
    
 }); 
