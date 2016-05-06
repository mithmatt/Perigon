'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:EventfeedCtrl
 * @description
 * # EventfeedCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('EventfeedCtrl', ['$scope', '$timeout', 'EventFeed', function ($scope, $timeout, EventFeed) {
    $scope.events = [];

    EventFeed.getEvents().success(function(data){
      $scope.events = data.data;
    });

    //var poll = function() {
    //  $timeout(function() {
    //    EventFeed.getEvents().success(function(data){
    //      $scope.events = data.data;
    //    });
    //    poll();
    //  }, 5000);
    //};
    //
    //poll();
  }]);
