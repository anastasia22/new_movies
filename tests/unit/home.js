'use strict';

/* jasmine specs for controllers go here */
 
describe('Spring movies controllers', function() {
 
  beforeEach(module('springMovies'));
  beforeEach(module('springMovies.home'));
  it('should create current slide', inject(function($controller) {
      var scope = {},
          ctrl = $controller('homeController', {$scope:scope});

      expect(scope.currSlide).toBe(0);
  }));
});
