'use strict';

/**
 * @ngdoc directive
 * @name frontEndApp.directive:eventfeedwindow
 * @description
 * # eventfeedwindow
 */
angular.module('frontEndApp')
  .directive('eventfeedwindow', function () {
    return {
      templateUrl: 'views/eventfeed.html',
      restrict: 'E'
    };
  });
