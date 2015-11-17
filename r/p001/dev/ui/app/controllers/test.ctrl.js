var testCtrl = function($scope,$http){
    $scope.name = "Test heading";
    $scope.segmentNames = [{
        name: "Personal Data",
        icon: "user"
    }, {
        name: "Contact details",
        icon: "earphone"
    }, {
        name: "Identity details",
        icon: "th-list"
    }, {
        name: "Skill and efficiency",
        icon: "knight"
    }, {
        name: " Projects",
        icon: "folder-open"
    }, {
        name: "Photograph",
        icon: "camera"
    }, {
        name: "Misc",
        icon: "file"
    }];
    
};

empDataMantSystem.controller('testCtrl',['$scope','$http',testCtrl]);