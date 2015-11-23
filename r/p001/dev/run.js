(function(){

'use strict';

//import : @begin
var c = require('./util/master.config');
var express = require('express');
var requestMapper = require('./util/requestmapper');
//import : @end

//shareableSettings : @begin
var shareableSettings={
	express:express,
	c:c
};
//shareableSettings : @end

var app = express();
var reqMapResult = requestMapper(shareableSettings,{});
app.listen(c.server.port,function(){
console.log('Server is running at '+c.server.port);

});

})();

