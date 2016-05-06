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

    var ACCESS_TOKEN = 'EAACEdEose0cBACQifySvqvIOE8EhMejoZAcSY1MBGaWlWPnNPZCucg7fnL15KuOUt0fB6cyB5yfCMTZB6BvOZAuvPFLK1WtBJplkg7uBNsa7nW7nGIGTPP0oFHhAbO6lzvsKlyfpodIAT1zDrIbSSMlZAsh2t1eKaVbCEBavpgQZDZD';
    var SERVER = 'https://graph.facebook.com/v2.5/pivotalsoftware/events?access_token=' + ACCESS_TOKEN;

    object.getEvents = function() {
      return $http({
        method: 'GET',
        url: SERVER
      });
    };

    return object;
  });
