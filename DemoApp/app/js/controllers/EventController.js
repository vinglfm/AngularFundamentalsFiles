'use strict';

app.controller('EventController',
  ['$scope', '$log', 'eventData',
  function($scope, $log, eventData) {

    eventData.getEvent(1)
    .success(function(event) {
      $scope.event = event;
    })
    .error(function(data, status, headers, config) {
      $log.warn(data, status, headers(), config);
    });

    $scope.filteredBy = "start";

    $scope.vote = function(session) {
      ++session.like;
    }
  }]
);
