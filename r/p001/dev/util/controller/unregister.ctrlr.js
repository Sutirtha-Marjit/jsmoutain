module.exports = function(req,res,shareableObject){
	
    console.log("reached to unregistration ctrlr....");
    
    var mongoose = shareableObject.mongoose;
    var Schema =  mongoose.Schema;
    var schemaBundle = shareableObject.schemaBundle;    
    var ResourceStack = schemaBundle["ResourceStack"];
    
    console.log(ResourceStack.find({}).where("_id").equals("56cfe68eab989d6014e24910"));
    
    var obj = {"registrationStatus":"true"};
    
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(obj);
    
    
};