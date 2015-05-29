'use strict';

angular.module('springMovies').directive('headerInfo', function() {
	return {
		restrict: 'E',
		templateUrl: 'scripts/directives/header/header.html',
		controller: ('ModalCtrl', ModalCtrl)
	}
})

function ModalCtrl($scope, $rootScope, $sce) {
	
};
ModalCtrl.$inject = ['$scope', '$rootScope', '$sce'];
