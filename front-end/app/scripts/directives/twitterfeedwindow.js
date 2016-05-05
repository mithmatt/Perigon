'use strict';

/**
 * @ngdoc directive
 * @name frontEndApp.directive:twitterfeedwindow
 * @description
 * # twitterfeedwindow
 */
angular.module('frontEndApp')
  .directive('twitterfeedwindow', function () {
    return {
      templateUrl: 'views/twitterfeed.html',
      restrict: 'E'
    };
  });
