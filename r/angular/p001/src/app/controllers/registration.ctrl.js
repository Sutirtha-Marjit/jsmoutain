var registrationCtrl = function($scope, $http) {

    var tabReady = false;
    $scope.moduleHeading = "Employee registration";
    $scope.dateFormatString = "DD-MM-YYYY";
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
        name: "Projects",
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
            skillsets: [
                ['Analytics', ['Analytics', 'Data Analytics', 'Statistical Modeling', 'Predictive Analytics', 'Logistic Regression', 'Data Science', 'Data Trends']],
                ['Application Development', []],
                ['Attention to Detail', []],
                ['Architecture', []],
                ['Big Data', []],
                ['Business Analytics', []]
            ]
        },

        address: {}
    };

    $scope.updateDateInScope = function() {
        console.log('updateDateInScope');
        
    };

    $scope.implementTabPanel = function() {
        console.log(Math.random() + " - DONE");
        //if(!tabReady){
        var t = new TabbedPanel();
        tabReady = true;
        //}
    }

    $scope.validation = {
        dateValid: function(dateString) {
            if (dateString !== null && dateString !== undefined) {
                if (dateString.indexOf('-') != -1) {
                    var dateArr = dateString.split('-');
                    var dateString = dateArr[1] + '-' + dateArr[0] + '-' + dateArr[2]
                    var date = new Date();
                    date.setDate();
                    console.log(dateString);

                    //console.log(date.toString().indexOf('Invalid Date')==-1);
                }
            }
        }
    };
    
    $scope.updateProject = function(){
        alert('updateProject');
        $scope.dataToCapture.projects.push($scope.currentProject);
    };

    $scope.loadFormData = function() {

        $http.get(SOURCES.countries).then(function(response) {

            $scope.formOptions.address.countries = response.data;
        })

    };

    $scope.loadFormData();

};
//empDataMantSystem.controller('registrationCtrl', ['$scope', registrationCtrl]);
empDataMantSystem.controller('registrationCtrl', registrationCtrl);