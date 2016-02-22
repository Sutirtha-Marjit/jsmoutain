module.exports = function(req,res,shareableObject){
    
    
     
    var mongoose = shareableObject.mongoose;
    var Schema =  mongoose.Schema;
     
    var resourceRegistrationSchema = new Schema({
        name : String,
        surname : String,
        registeredOn : Number,
        phone: Number
    });
   
    var conn = mongoose.createConnection('mongodb://localhost/resourcemanagement');
   
    
    var ResourceModel = mongoose.model('ResourceModel',resourceRegistrationSchema);
    var currentResource = new ResourceModel({
        name:"Rina",
        surname : "Mehra",
        registeredOn : new Date().getTime(),
        phone: 9830663252

    });
    
    currentResource.save(function (err) {
            if (err) {
                console.log(err);
            }
                
    });
    conn.close();
    
    
    

    
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	//res.send(shareableObject);

};