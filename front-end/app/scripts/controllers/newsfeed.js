'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:NewsfeedCtrl
 * @description
 * # NewsfeedCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('NewsfeedCtrl', ['$scope', '$timeout', 'NewsFeed', function ($scope, $timeout, NewsFeed) {

    $scope.news = [];

    NewsFeed.getNews().success(function(data){
      $scope.news = data.news;
    });

    //var poll = function() {
    //  $timeout(function() {
    //    NewsFeed.getNews().success(function(data){
    //      $scope.news = data.news;
    //    });
    //    poll();
    //  }, 5000);
    //};
    //
    //poll();

    //$scope.news = [
    //  {
    //    "id": 1,
    //    "title": "Ford to invest $182M in software company Pivotal",
    //    "url": "http://www.detroitnews.com/story/business/autos/ford/2016/05/05/ford-pivotal-software-investment/83959864/",
    //    "time": "06 May 2016 10 AM",
    //    "desc": "Ford Motor Co. is investing $182.2 million in Palo Alto-based software company Pivotal, marking the latest collaboration between Detroit’s automakers and Silicon Valley."
    //  },
    //  {
    //    "id": 2,
    //    "title": "Software startup Pivotal Grabs a Healthy $253 Million from Ford and Microsoft AUTOS FEATURED NEWS",
    //    "url": "http://www.industryleadersmagazine.com/software-startup-pivotal-grabs-healthy-253-million-ford-microsoft/",
    //    "time": "05 May 2016 9 AM",
    //    "desc": "Microsoft and Ford invested $253 million in software startup Pivotal, a company spun out of EMC and VMware, to its gilded, rich coffers. According to a source familiar with the matter, the company raised the round at a post-money valuation of $2.8 billion."
    //  },
    //  {
    //    "id": 3,
    //    "title": "GM and Ford lean on Lyft and Pivotal for help in developing self-driving cars",
    //    "url": "http://www.latimes.com/business/technology/la-fi-tn-gm-ford-lyft-20160505-snap-story.html",
    //    "time": "05 May 2016 6 PM",
    //    "desc": "Two miles apart in Palo Alto, workers from Ford Motor Co. and General Motors Co. are hustling to establish a role for their companies in a future where consumers don't own cars and the vehicles steer themselves."
    //  },
    //  {
    //    "id": 4,
    //    "title": "Hadoop market consolidation continues with Pivotal's exit",
    //    "url": "http://searchdatamanagement.techtarget.com/news/450281286/Hadoop-market-consolidation-continues-with-Pivotals-exit",
    //    "time": "04 May 2016 2 PM",
    //    "desc": "Pivotal Software dropped out of the Hadoop distribution business in favor of reselling the Hortonworks version of the big data framework -- and the market consolidation moves may not be over."
    //  }
    //];
  }]);
