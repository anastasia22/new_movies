'use strict';


angular.module('springMovies', [
	'ngRoute',
  'springMovies.movie'
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
   
 }); 
