'use strict';

app.controller('EventController',
  ['$scope', 'eventData',
  function($scope, eventData) {

    $scope.event = eventData.event;

    $scope.filteredBy = "start";

    $scope.vote = function(session) {
      ++session.like;
    }
  }]
);
