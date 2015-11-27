
(function(){
'use strict';

//import : @begin
var c = require('./util/master.config');
var express = require('express');
var requestMapper = require('./util/requestmapper');
//import : @end


//controller :@begin
var ctrl={};
var ctrlroot = './util/controller/';
ctrl.rootController = require(ctrlroot+'root.ctrlr.js');
ctrl.authenticateController = require(ctrlroot+'authenticate.ctrlr.js');
//controller :@end

var app = express();

//shareableSettings : @begin
var shareableSettings={
	express:express,
	app:app,
	c:c,
	ctrl:ctrl
};
//shareableSettings : @end

var reqMapResult = requestMapper(shareableSettings,{});
app.listen(c.server.port,function(){
console.log('Server is running at '+c.server.port);
app.use('/app',express.static('ui'));

});

})();
