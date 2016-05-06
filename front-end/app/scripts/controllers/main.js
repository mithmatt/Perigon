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

    $scope.subscribe = {
      news: {
        value: true,
        clazz : "md-primary"
      },
      facebook: {
        value: true,
        clazz : "md-primary"
      },
      twitter: {
        value: true,
        clazz : "md-primary"
      },
      glassdoor: {
        value: true,
        clazz : "md-primary"
      }
    };

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

    $scope.clickSubscribe = function (cardTitle) {
      switch(cardTitle) {
        case 'news':
          $scope.subscribe.news.value = !$scope.subscribe.news.value;
          $scope.subscribe.news.clazz = $scope.subscribe.news.value ? "md-primary": "md-warn";
          break;
        case 'facebook':
          $scope.subscribe.facebook.value = !$scope.subscribe.facebook.value;
          $scope.subscribe.facebook.clazz = $scope.subscribe.facebook.value ? "md-primary": "md-warn";
          break;
        case 'twitter':
          $scope.subscribe.twitter.value = !$scope.subscribe.twitter.value;
          $scope.subscribe.twitter.clazz = $scope.subscribe.twitter.value ? "md-primary": "md-warn";
          break;
        case 'glassdoor':
          $scope.subscribe.glassdoor.value = !$scope.subscribe.glassdoor.value;
          $scope.subscribe.glassdoor.clazz = $scope.subscribe.glassdoor.value ? "md-primary": "md-warn";
          break;
      }
    };

  });
