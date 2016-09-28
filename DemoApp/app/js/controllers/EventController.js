'use strict';

app.controller('EventController',
  ['$scope', '$log', 'eventData',
  function($scope, $log, eventData) {

    $scope.event = eventData.get(1)
    .$promise.then(function(event) {
      $scope.event = event;
    })
    .catch(function(data, status, headers, config) {
       $log.warn(data, status, headers, config);
     });

    $scope.filteredBy = "start";

    $scope.vote = function(session) {
      ++session.like;
    }
  }]
);
