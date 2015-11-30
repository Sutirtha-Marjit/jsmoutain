var registrationCtrl = function($scope, $http) {
    
    $scope.moduleHeading = "Registration";
    $scope.step = 0;
    $scope.stepArray = [true];
    

};
empDataMantSystem.controller('registrationCtrl', ['$scope','$http', registrationCtrl]);