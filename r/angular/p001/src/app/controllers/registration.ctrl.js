var registrationCtrl = function($scope, $http) {
    var tabReady = false;
    $scope.moduleHeading = "Employee registration";
    $scope.includeTemplates = {
        personalData: 'i/personaldata.inc.html'
    };
    $scope.dateFormatString = "MM/DD/YYYY";
    $scope.dataToCapture = {
        name: null,
        surname: null,
        dob: null,
        bloodGroup: null,
        projects: []
    };

    $scope.currentProject = {};

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
    $scope.formOptions = {
        medical: {
            bloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Others'],
            medicalDisabilities: ['Eye', 'Ear', 'Nose', 'Throat', 'Hands', 'Legs', 'Spine', 'Nervous System', 'Hormonal', 'Others']
        },
        technical: {
            
        },

        address: {}
    };

    $scope.updateDateInScope = function() {
        console.log('updateDateInScope');

    };
    
    $scope.validationFunction = function(){
         
    };
   
    $scope.deleteProject = function(idToDelete) {

        $scope.dataToCapture.projects = _.reject($scope.dataToCapture.projects, function(proj) {
            return (proj.id === idToDelete);
        });
		
		if(idToDelete===$scope.currentProject.id){
			$scope.currentProject = {};
			$('div[data-id="projectSet"]').addClass('hide');
		}

    }

    $scope.claenCurrentProject = function() {
        $('div[data-id="projectSet"]').removeClass('hide');
        $scope.currentProject = {};
    }

    $scope.editProject = function(i) {
		$('div[data-id="projectSet"]').removeClass('hide');
		var temp = $scope.dataToCapture.projects[i];
		$scope.currentProject = temp;

    };

    $scope.updateProject = function() {

        $(document).scrollTop(0);
        if ($scope.currentProject.id === undefined || $scope.currentProject.id === null) {
            $scope.currentProject.id = '_id' + (Math.random() + '').split('.')[1];
            $scope.dataToCapture.projects.push($scope.currentProject);
            $scope.currentProject = {};
        } else {
            var proj;
            proj = _.find($scope.dataToCapture.projects, function(proj) {
                return proj.id == $scope.currentProject.id;
            });
			
            proj = $scope.currentProject;
            $scope.currentProject = {};
        }
		$('div[data-id="projectSet"]').addClass('hide');
    };

    $scope.loadFormData = function() {

        $http.get(SOURCES.countries).then(function(response) {

            $scope.formOptions.address.countries = response.data;
        })

    };
    
    $scope.postData = function(){
        
        $http.post('http://169.144.60.69:8081/testNode',$scope.dataToCapture).then(function(){
            alert('Done');
            
        },function(response){            
            console.log(response);
        });
        
        /*
        $http({
               url:'http://169.144.60.69:8081/testNode',
               method:"POST",
               headers: {
                          'Authorization': 'Basic dGVzdDp0ZXN0',
                          'Content-Type': 'application/x-www-form-urlencoded',
                          'Access-Control-Allow-Origin':'*'
               },
               data: $scope.dataToCapture
          });*/
    };

    $scope.renderTabbedPane = function() {

        var t = new TabbedPanel();

    };

    $scope.loadFormData();

};
//empDataMantSystem.controller('registrationCtrl', ['$scope', registrationCtrl]);
empDataMantSystem.controller('registrationCtrl', registrationCtrl);

/*Registration controller*/