/*CONFIGURATION MANAGEMENT BLOCK : Start*/
empDataMantSystem.config(function($routeProvider){
    console.log('CONFIG STARTS');
    $routeProvider.when('/registrationpage',{
        templateUrl:'i/tpl.registration.html',
        controller:null
    })
    .when('/resourcedetail',{
        templateUrl:'i/tpl.resourcedetail.html',
        controller:null
    })
    .when('/projects',{
        templateUrl:'i/tpl.project.html',
        controller:null
    })    
    .when('/test',{
        templateUrl:'i/tpl.test.html',
        controller:null
    })
    .when('/welcome',{
        templateUrl:'i/tpl.welcome.html',
        controller:null
    })
    .otherwise({
        redirectTo:'/welcome'      
    })
    
});



empDataMantSystem.controller('StudentController', function($scope) {
    $scope.students = [
        {name: 'Mark Waugh', city:'New York'},
        {name: 'Steve Jonathan', city:'London'},
        {name: 'John Marcus', city:'Paris'}
    ];
 
    $scope.message = "Click on the hyper link to view the students list.";
});

/*CONFIGURATION MANAGEMENT BLOCK : End*/