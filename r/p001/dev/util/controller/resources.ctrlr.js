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
    
    var ResourceStack = mongoose.model('ASAQWYUAYS',resourceRegistrationSchema);
    ResourceStack.find({},function(error,docs){
        
        res.send(docs);
        
    });
};