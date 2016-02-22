module.exports = function(req,res,shareableObject){
	
    var mongoose = shareableObject.mongoose;
    var Schema =  mongoose.Schema;
     
    var resourceRegistrationSchema = new Schema({
        name : String,
        surname : String,
        registeredOn : Number,
        phone: Number,
        username: String,
        password: String,
        email: String,
        sex: String
    });
    
    var ResourceStack = mongoose.model('ResourceStack',resourceRegistrationSchema);
    var currentResource = new ResourceStack(req.body);
    
    currentResource.save(function(error){
        console.log(error);
    });
    
    var obj = {"success":"true"};
    
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(obj);
};