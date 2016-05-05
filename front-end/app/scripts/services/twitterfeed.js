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

    var SERVER = 'http://www.google.com';

    object.getTweets = function() {
      return $http({
        method: 'GET',
        url: SERVER + '/tweets'
      }).success(function(data){
        object.tweets = data.tweets;
      });
    };

    return object;
  });
