'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.eventfeed
 * @description
 * # eventfeed
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('EventFeed', function ($http) {
    var object = {
      events: []
    };

    var ACCESS_TOKEN = 'EAACEdEose0cBANrCKEIphTHLzKIzZCeugcfK2idfY30SmAJy5vOo5xLeGMW1ifZAoMu4iTSZACndD7OkIlRwtPGiNvtrJfhNycgjMlTZCEG4kmTZCrY5wEjhUaqlZCzczCgttSt0vO5csAl0b4yZAv8aHCv4DSF6iAu5c4cQKswKQZDZD';
    var SERVER = 'https://graph.facebook.com/v2.5/pivotalsoftware/events?access_token=' + ACCESS_TOKEN;

    object.getEvents = function() {
      return $http({
        method: 'GET',
        url: SERVER
      });
    };

    return object;
  });
