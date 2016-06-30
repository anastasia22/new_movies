'use strict';
/*
arr {param} Array of objects with props:
  title String
  poster String - url
  genres Array of objects with name and id props
  vote_average Number
*/
angular.module('springmov').directive('articleul', function() {
  return {
    restrict: 'E',
    scope:{
      arr: "=arr",
      isexplicit: "=isexplicit",
      filter: "=filter"
    },
    templateUrl: 'scripts/directives/article/article.html',
    controller:function($scope){
      $scope.sourceUrl = 'http://static01.nyt.com/';
      $scope.unfilter = !$scope.filter
      console.log($scope.primary)
    }
  }
})
