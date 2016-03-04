var resourceListingCtrl = function($scope,$http){
    var alphabtCount = 65;
    $scope.alphabeticSection = true;
    $scope.alphabets=[];
    $scope.selectedCharacter = "All";
    $scope.resourceList = [];
    
    while(alphabtCount<91){ 
    $scope.alphabets.push(String.fromCharCode(alphabtCount));
    alphabtCount++;
    }
    
    $scope.alphabeticSelection = function(){
        
    };
    
    $scope.pressLetter = function(character){
        $scope.selectedCharacter = character;        
    };
    
    $http.get("http://localhost:6500/rest/resources").then(function(response){
        
        $scope.resourceList = response.data;
        
    });
    
    $scope.unregister = function(_id){
        
    }
    
    $scope.$watch("selectedCharacter",function(currentCharacter,OldCharacter){
       
        
        var button = angular.element('.chacarterPanel a#btnCharacter'+currentCharacter)[0];
        var activeBtns = angular.element('.chacarterPanel a.active');
        for(var i=0;i<activeBtns.length;i++){
           activeBtns[i].className = String(activeBtns[i].className).replace('btn-success active','');
        }
        
        if(button.className.indexOf("active")===-1){
           button.className = button.className+" btn-success active";
        }
       
        
    });
    
};

empDataMantSystem.controller('resourceListingCtrl', ['$scope', '$http', resourceListingCtrl]);