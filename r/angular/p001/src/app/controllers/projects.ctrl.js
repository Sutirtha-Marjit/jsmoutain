var projectsCtrl = function($scope, $http) {
    
    $scope.projectList = [
    {projectName:"RM2.0"}
    ];
    
    $scope.currentProject = {};
    
    $scope.cleanCurrentProject = function(){
       $scope.currentProject = {}; 
    };
    
    $scope.addNewProject = function(){
       $scope.cleanCurrentProject();
       $('*[data-id="projectSet"]').removeClass('hide');       
    };
    
};
empDataMantSystem.controller('projectsCtrl', ['$scope','$http', projectsCtrl]);