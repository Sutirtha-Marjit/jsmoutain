var projectsCtrl = function ($scope, $http) {

	$scope.operationMode = "IDLE";
	$scope.editIndex = null;
	$scope.dataCapture = {
		projects : []
	};

	$scope.currentProject = {};
	$scope.currentEditableProject = {};

	$scope.cleanCurrentProject = function () {
		$scope.currentProject = {};
	};

	$scope.appendANewProject = function () {
		$scope.dataCapture.projects.push($scope.currentProject);
		$scope.cleanCurrentProject();
		$scope.operationMode = "IDLE";
	};

	$scope.addHandler = function () {
		$scope.cleanCurrentProject();
		$scope.operationMode = "ADD";
	};

	$scope.editHandler = function (i) {
		$scope.editIndex = i;
		$scope.currentEditableProject = {};
		//$scope.currentEditableProject = $scope.dataCapture.projects[i];
		for (el in $scope.dataCapture.projects[i]) {
			$scope.currentEditableProject[el] = $scope.dataCapture.projects[i][el];
		}
		$scope.operationMode = "EDIT";
	};

	$scope.editCompleteHandler = function () {
		if ($scope.editIndex !== null) {
			var i = $scope.editIndex;
			for (el in $scope.dataCapture.projects[i]) {
				$scope.dataCapture.projects[i][el] = $scope.currentEditableProject[el];
			}
            $scope.currentEditableProject = null;
            $scope.operationMode = "IDLE";
		}
	};
    
    $scope.cancelHandler = function(){
        $scope.operationMode = "IDLE";
        $scope.currentEditableProject = null;
        $scope.cleanCurrentProject();
    };    

};
empDataMantSystem.controller('projectsCtrl', ['$scope', '$http', projectsCtrl]);
