module.exports = function(shareableSettings,config){
    
    //import : @begin.
    var express = shareableSettings.express;
    var BaseController = shareableSettings.basecontroller;
    //import : @end
    
    var masterConfig = shareableSettings.c;
    var app = shareableSettings.app;
    var ctrl = shareableSettings.ctrl;
    var route = shareableSettings.c.route;
    
    BaseController(app,route.root,ctrl.rootController,{num:'ok'},'GET');
    BaseController(app,route.info,ctrl.infoController,{num:'ok'},'GET');
    BaseController(app,route.help,ctrl.helpController,{num:'ok'},'GET');
    
    BaseController(
        app,
        route.dbtest,
        ctrl.dbtestController,
        {
            mongoose : shareableSettings.mongoose,
            dbconn:shareableSettings.dbconn
        },
        'POST'
    );
    
    
    BaseController(
        app,
        route.auth,
        ctrl.authenticateController,
        {
            mongoose : shareableSettings.mongoose,
            dbconn:shareableSettings.dbconn
        },
        'POST'
    );
    
    
    BaseController(
        app,
        route.registration,
        ctrl.registrationController,
        {
            mongoose : shareableSettings.mongoose,
            dbconn:shareableSettings.dbconn
        },
        'POST'
    );
    
    
    BaseController(
        app,
        route.resources,
        ctrl.resourcesController,
        {
            mongoose : shareableSettings.mongoose,
            dbconn:shareableSettings.dbconn
        },
        'GET'
    );
    
};