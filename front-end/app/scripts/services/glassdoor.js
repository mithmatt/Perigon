'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.glassdoor
 * @description
 * # glassdoor
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('Glassdoor', function ($http) {
    var object = {
      reviews: []
    };

    var SERVER = 'http://192.168.102.23:8080';

    object.getReviews = function() {
      return $http({
        method: 'GET',
        url: SERVER + '/glassdoor'
      }).success(function(data){
        object.reviews = data.glassDoor;
      }).error(function() {
      });
    };

    return object;
  });
