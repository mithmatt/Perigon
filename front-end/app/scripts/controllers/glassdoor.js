'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:GlassdoorCtrl
 * @description
 * # GlassdoorCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('GlassdoorCtrl', ['$scope', '$timeout', 'Glassdoor', function ($scope, $timeout, Glassdoor) {

    $scope.reviews = [];

    Glassdoor.getReviews().success(function(data){
      $scope.reviews = data.glassDoor;
      console.log($scope.reviews);
    });
  }]);
