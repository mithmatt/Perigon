'use strict';

/**
 * @ngdoc directive
 * @name frontEndApp.directive:newsfeedwindow
 * @description
 * # newsfeedwindow
 */
angular.module('frontEndApp')
  .directive('newsfeedwindow', function () {
    return {
      templateUrl: 'views/newsfeed.html',
      restrict: 'E'
    };
  });
