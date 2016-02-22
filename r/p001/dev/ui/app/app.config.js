
empDataMantSystem.routerList = [
	['/registrationpage','views/i/tpl.registration.html',null],
	['/resourcedetail','views/i/tpl.resourcedetail.html',null],
	['/projects','views/i/tpl.project.html',null],
	['/test','views/i/tpl.test.html',null],
    ['/findresources','views/i/tpl.findresources.html',null],
	['/z$90qtxcv0807dxqtasf','views/i/tpl.settings.html',null],
	['/welcome','views/i/tpl.welcome.html',null]
];

empDataMantSystem.routerList["default"] = ['/welcome','views/i/tpl.welcome.html',null];

/*CONFIGURATION MANAGEMENT BLOCK : Start*/

empDataMantSystem.config(function($routeProvider){
	var defaultConfig = empDataMantSystem.routerList["default"];
    
	for(var i=0;i<empDataMantSystem.routerList.length;i++){
		
		$routeProvider.when(empDataMantSystem.routerList[i][0],{
        templateUrl:empDataMantSystem.routerList[i][1],
        controller:empDataMantSystem.routerList[i][2]
		});	
	}
    
    $routeProvider.otherwise(defaultConfig[0],{
        templateUrl:defaultConfig[1],
        controller:defaultConfig[2]
		});
});


/*CONFIGURATION MANAGEMENT BLOCK : End*/