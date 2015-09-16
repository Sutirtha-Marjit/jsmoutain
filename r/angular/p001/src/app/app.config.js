
empDataMantSystem.routerList = [
	['/registrationpage','i/tpl.registration.html',null],
	['/resourcedetail','i/tpl.resourcedetail.html',null],
	['/projects','i/tpl.project.html',null],
	['/test','i/tpl.test.html',null],
	['/z$90qtxcv0807dxqtasf','i/tpl.settings.html',null],
	['/welcome','i/tpl.welcome.html',null]
];

/*CONFIGURATION MANAGEMENT BLOCK : Start*/

empDataMantSystem.config(function($routeProvider){
	
	for(var i=0;i<empDataMantSystem.routerList.length;i++){
		
		$routeProvider.when(empDataMantSystem.routerList[i][0],{
        templateUrl:empDataMantSystem.routerList[i][1],
        controller:empDataMantSystem.routerList[i][2]
		});	
	}

});


/*CONFIGURATION MANAGEMENT BLOCK : End*/