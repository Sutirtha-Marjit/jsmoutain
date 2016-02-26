(function () {
	'use strict';

	//import : @begin
	var c = require('./util/master.config');
	var express = require('express');
	var bodyParser = require('body-parser');
    var mongoose = require("mongoose");
    var SchemaConfig = require("./util/schema.config.js");
    var requestMapper = require('./util/requestmapper');
    var baseController = require("./util/basecontroller");
    var DBSchemaManager = require("./util/dbschemamanager"); 
	//import : @end

	//controller :@begin
	var ctrl = {};
	var ctrlroot = './util/controller/';
	ctrl.rootController = require(ctrlroot + 'root.ctrlr.js');
	ctrl.authenticateController = require(ctrlroot + 'authenticate.ctrlr.js');
	ctrl.registrationController = require(ctrlroot + 'registration.ctrlr.js');
    ctrl.resourcesController = require(ctrlroot + 'resources.ctrlr.js');
    ctrl.helpController = require(ctrlroot + 'help.ctrlr.js');
	ctrl.infoController = require(ctrlroot + 'info.ctrlr.js');
    ctrl.dbtestController = require(ctrlroot+ 'dbtest.ctrlr.js');
    //controller :@end

	var app = express();
    app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
			extended : true
		}));
    
    //db variables @begin
    var dbconn = mongoose.connect(c.db.location);    
    //db variables @end
    
    var schemaBundle = DBSchemaManager(SchemaConfig,mongoose);
    
	//shareableSettings : @begin
	var shareableSettings = {
		express : express,
		app : app,
        mongoose : mongoose,
        dbconn : dbconn,
        schemaBundle : schemaBundle,
        basecontroller: baseController,
        c : c,
		ctrl : ctrl
	};
	//shareableSettings : @end

	app.use('/app', express.static('ui'));
	

	var reqMapResult = requestMapper(shareableSettings, {});
	
    app.listen(c.server.port, function () {
    console.log('Server is running at ' + c.server.port);
	});

})();