var registrationCtrl = function($scope,$http) {
	console.log(window);
    $scope.moduleHeading = "Employee registration";
    $scope.segmentNames = ["Personal Data", "Photograph", "Identity details", "Skill and efficiency", "Projects", "Misc"];

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

};
//empDataMantSystem.controller('registrationCtrl', ['$scope', registrationCtrl]);
empDataMantSystem.controller('registrationCtrl',registrationCtrl);