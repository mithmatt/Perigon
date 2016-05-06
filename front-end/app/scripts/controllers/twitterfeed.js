'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:TwitterfeedCtrl
 * @description
 * # TwitterfeedCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('TwitterFeedCtrl', ['$scope', 'TwitterFeed', function ($scope, TwitterFeed) {

    // var x = TwitterFeed.getTweets();

    var imagePath = 'images/pivotal_logo.png';
    $scope.messages = [{
      face : imagePath,
      what: 'Hello?',
      who: 'Echo',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'How are you?',
      who: 'Matt',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'What can I do?',
      who: 'Cindy',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'I love AngularJS',
      who: 'Andy',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Oh Yes I do!',
      who: 'Michelle',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Oh Yes I do!',
      who: 'Obama',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];
  }]);
