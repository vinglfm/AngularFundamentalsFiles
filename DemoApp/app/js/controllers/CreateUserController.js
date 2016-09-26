'use strict';

app.controller("CreateUserController", ["$scope", function($scope) {
  $scope.loadGravatar = function(email) {
    console.log(email);
    var userEmail = email || "";
    return 'https://www.gravatar.com/avatar/'+ calcMD5(userEmail) +'?s=200';
  };
}]);
