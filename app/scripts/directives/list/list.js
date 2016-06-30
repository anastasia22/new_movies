'use strict';
/*
arr {param} Array of objects with props:
  title String
  poster String - url
  genres Array of objects with name and id props
  vote_average Number
*/
angular.module('springmov').directive('list', function() {
  return {
    restrict: 'E',
    scope:{
      arr: "=arr"
    },
    templateUrl: 'scripts/directives/list/list.html',
    controller:function($scope){
      console.log($scope.obj)
    }
  }
})
