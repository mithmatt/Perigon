'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.twitterfeed
 * @description
 * # twitterfeed
 * Factory in the frontEndApp.
 */
angular.module('frontEndApp')
  .factory('TwitterFeed', function ($http) {
    var object = {
      tweets: []
    };

    var SERVER = 'http://192.168.102.23:8080';

    object.getTweets = function() {
      return $http({
        method: 'GET',
        url: SERVER + '/twitter'
      }).success(function(data){
        object.tweets = data.data;
      }).error(function() {
      });
    };

    return object;
  });
