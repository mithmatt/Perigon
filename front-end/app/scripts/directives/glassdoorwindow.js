'use strict';

/**
 * @ngdoc directive
 * @name frontEndApp.directive:glassdoorwindow
 * @description
 * # glassdoorwindow
 */
angular.module('frontEndApp')
  .directive('glassdoorwindow', function () {
    return {
      templateUrl: 'views/glassdoor.html',
      restrict: 'E'
    };
  });
