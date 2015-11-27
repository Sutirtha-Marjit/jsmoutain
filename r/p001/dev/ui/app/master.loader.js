var masterConfigurationObject = {
	jquery : "app/lib/jquery/jquery.min.js",
	underscore : "app/lib/underscore/underscore.js",
	angular : "app/lib/angular/angular.js",
	angularRoute : "app/lib/angular/angular-route.js",
	angularUiRouter : "app/lib/angular/angular-ui-router.js",
	urls : "app/urls.js",
	app : "app/app.js",
	appConfig : "app/app.config.js",
	ngDateRequired : "app/directives/ng-date-required.js",
	testCtrl : "app/controllers/test.ctrl.js",
	appCtrl : "app/controllers/app.ctrl.js",
	registrationCtrl : "app/controllers/registration.ctrl.js",
	authenticateCtrl : "app/controllers/authenticate.ctrl.js",
	projectsCtrl : "app/controllers/projects.ctrl.js",
	bootstrapMin : "views/c/bs/js/bootstrap.min.js",
	datePicker : "app/customutils/DatePicker.js",
	tabbedPanel : "app/customutils/TabbedPanel.js",
	selfie : "app/customutils/Selfie.js"
}
var content="";
for(el in masterConfigurationObject){
   content = content+'masterConfigurationObject.'+el+','+'\n'
}
requirejs([masterConfigurationObject.jquery,
masterConfigurationObject.underscore,
masterConfigurationObject.angular,
masterConfigurationObject.angularRoute,
masterConfigurationObject.angularUiRouter,
masterConfigurationObject.urls,
masterConfigurationObject.app,
masterConfigurationObject.appConfig,
masterConfigurationObject.ngDateRequired,
masterConfigurationObject.testCtrl,
masterConfigurationObject.appCtrl,
masterConfigurationObject.registrationCtrl,
masterConfigurationObject.authenticateCtrl,
masterConfigurationObject.projectsCtrl,
masterConfigurationObject.bootstrapMin,
masterConfigurationObject.datePicker,
masterConfigurationObject.tabbedPanel,
masterConfigurationObject.selfie,]);

