(function () {
	'use strict';

	//import : @begin
	var c = require('./util/master.config');
	var express = require('express');
	var bodyParser = require('body-parser');
	var requestMapper = require('./util/requestmapper');
	//import : @end

	//controller :@begin
	var ctrl = {};
	var ctrlroot = './util/controller/';
	ctrl.rootController = require(ctrlroot + 'root.ctrlr.js');
	ctrl.authenticateController = require(ctrlroot + 'authenticate.ctrlr.js');
	ctrl.registrationController = require(ctrlroot + 'registration.ctrlr.js');
	ctrl.infoController = require(ctrlroot + 'info.ctrlr.js');
	//controller :@end

	var app = express();

	//shareableSettings : @begin
	var shareableSettings = {
		express : express,
		app : app,
		c : c,
		ctrl : ctrl
	};
	//shareableSettings : @end

	app.use('/app', express.static('ui'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
			extended : true
		}));

	var reqMapResult = requestMapper(shareableSettings, {});
	app.listen(c.server.port, function () {
		console.log('Server is running at ' + c.server.port);

		app.post('rest/exp', function (req, res) {
			console.log(req.body);
			var obj = {
				a : 10
			};
			res.header('Content-Type', 'application/json');
			res.send(JSON.stringify(obj));

		});

	});

})();