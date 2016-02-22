var resourceListingCtrl = function($scope,$http){
    var alphabtCount = 65;
    $scope.alphabeticSection = false;
    $scope.alphabets=[];
    
    while(alphabtCount<91){ 
    $scope.alphabets.push(String.fromCharCode(alphabtCount));
    alphabtCount++;
    }
    
};

empDataMantSystem.controller('resourceListingCtrl', ['$scope', '$http', resourceListingCtrl]);