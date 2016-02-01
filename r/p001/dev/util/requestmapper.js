module.exports = function(shareableSettings,config){
    
    //import : @begin.
    var express = shareableSettings.express;
    //import : @end
    
    var masterConfig = shareableSettings.c;
    var app = shareableSettings.app;
    
    app.get(shareableSettings.c.route.root,shareableSettings.ctrl.rootController);
    app.post(shareableSettings.c.route.auth,shareableSettings.ctrl.authenticateController);
    app.post(shareableSettings.c.route.info,shareableSettings.ctrl.infoController);
	app.post(shareableSettings.c.route.registration,shareableSettings.ctrl.registrationController);
    
};