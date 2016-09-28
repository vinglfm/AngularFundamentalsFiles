'use strict';

app.controller("EditController", ["$scope", "$location", "eventData", function($scope, $location, eventData) {
  $scope.addEvent = function(event, newFormEvent) {
    if(newFormEvent.$valid) {
      eventData.save(event);
    } else {
      console.log("not valid form");
    }
  };

  $scope.today= function() {
    var today = moment();
    var tomorrow = moment(today).add(1, 'day').format('YYYY-MM-DD');
    return tomorrow;
  }

  $scope.cancelEvent = function() {
    window.location="/EventDetails.html";
  }
}]);
