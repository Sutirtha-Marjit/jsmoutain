var registrationCtrl = function($scope, $http) {
    
    var tabReady = false;
    $scope.moduleHeading = "Employee registration";    
    $scope.dataToCapture = {
        name: null,
        surname: null,
        dob: null,
        sex: null,
        bloodGroup: null
    };    

    $scope.segmentNames = [{
        name: "Personal Data",
        icon: "user"
    }, {
        name: "Contact details",
        icon: "earphone"
    },{
        name: "Photograph",
        icon: "camera"
    }, {
        name: "Identity details",
        icon: "th-list"
    }, {
        name: "Skill and efficiency",
        icon: "knight"
    }, {
        name: "Projects",
        icon: "folder-open"
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
            skillsets: [
                ['Analytics', ['Analytics', 'Data Analytics', 'Statistical Modeling', 'Predictive Analytics', 'Logistic Regression', 'Data Science', 'Data Trends']],
                ['Application Development', []],
                ['Attention to Detail', []],
                ['Architecture', []],
                ['Big Data', []],
                ['Business Analytics', []]
            ]
        }
    };
    
    $scope.updateDateInScope = function(){
      console.log('updateDateInScope');  
    };
    
    $scope.implementTabPanel = function(){
        console.log(Math.random()+" - DONE");
        //if(!tabReady){
        var t = new TabbedPanel();
        tabReady = true;
       //}
    }
    
    $scope.loadFormData = function(){
        
       $http.get(SOURCES.countries).then(function(response){
            //console.log(response);
        })
    }
    
    

};
//empDataMantSystem.controller('registrationCtrl', ['$scope', registrationCtrl]);
empDataMantSystem.controller('registrationCtrl', registrationCtrl);