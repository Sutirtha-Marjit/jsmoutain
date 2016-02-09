module.exports = function(req,res){
    
    var mongoose = require("mongoose");
    var Schema =  mongoose.Schema;

    var resourceRegistrationSchema = new Schema({
        name : String,
        surname : String,
        registeredOn : Number,
        phone: Number
    });
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send("{}");

};