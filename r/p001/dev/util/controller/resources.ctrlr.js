module.exports = function(req,res,shareableObject){
    
    var mongoose = shareableObject.mongoose;
    var Schema =  mongoose.Schema;
    var schemaBundle = shareableObject.schemaBundle;
    var ResourceStack =  schemaBundle["ResourceStack"];
   
    ResourceStack.find({},function(error,docs){
        
        res.send(docs);
        
    });
};