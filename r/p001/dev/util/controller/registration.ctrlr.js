module.exports = function(req,res,shareableObject){
	
    console.log("reached to registration ctrlr....");
    
    var mongoose = shareableObject.mongoose;
    var Schema =  mongoose.Schema;
    var schemaBundle = shareableObject.schemaBundle;    
    var ResourceStack = schemaBundle["ResourceStack"];
    
    var currentResource = new ResourceStack(req.body);
    
    currentResource.save(function(error){
        console.log(error);
    });
    
    var obj = {"registrationStatus":"true"};
    
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(obj);
    
    
};