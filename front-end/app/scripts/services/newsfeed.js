'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.newsfeedwindow
 * @description
 * # newsfeedwindow
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('NewsFeed', function ($http) {
    var object = {
      news: []
    };

    var SERVER = 'http://192.168.102.23:8080';

    object.getNews = function() {
      return $http({
        method: 'GET',
        url: SERVER + '/news'
      }).success(function(data){
        object.news = data.news;
      });
    };

    return object;
  });
