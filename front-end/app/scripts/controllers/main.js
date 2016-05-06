'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('MainCtrl', function ($scope) {

    $scope.showNews = false;
    $scope.showFacebook = false;
    $scope.showTwitter = false;
    $scope.showGlassdoor = false;

    $scope.toggle = function (cardTitle) {
      switch(cardTitle) {
        case 'news':
          $scope.showNews = !$scope.showNews;
          break;
        case 'facebook':
          $scope.showFacebook = !$scope.showFacebook;
          break;
        case 'twitter':
          $scope.showTwitter = !$scope.showTwitter;
          break;
        case 'glassdoor':
          $scope.showGlassdoor = !$scope.showGlassdoor;
          break;
      }
    };

  });
