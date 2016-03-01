var resourceListingCtrl = function($scope,$http){
    var alphabtCount = 65;
    $scope.alphabeticSection = true;
    $scope.alphabets=[];
    $scope.selectedCharacter = null;
    $scope.resourceList = [];
    
    while(alphabtCount<91){ 
    $scope.alphabets.push(String.fromCharCode(alphabtCount));
    alphabtCount++;
    }
    
    $scope.alphabeticSelection = function(){
        
    };
    
    $scope.pressLetter = function($event){
        $scope.selectedCharacter = $event.target.innerText;        
    };
    
    $http.get("http://localhost:6500/rest/resources").then(function(response){
        
        $scope.resourceList = response.data;
        
    })
    
};

empDataMantSystem.controller('resourceListingCtrl', ['$scope', '$http', resourceListingCtrl]);