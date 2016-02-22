module.exports = function BaseController(app,uri,controller,shareableObject,requestMethod){
    
    console.log("BaseController invoked for "+uri);
    switch(requestMethod){
            
        case "GET":
        app.get(uri,function(req,res){
            console.log("CALLED :"+uri);
            controller(req,res,shareableObject);
            
        });
        
        break;
            
        case "POST":
        app.post(uri,function(req,res){
            console.log("CALLED AT POST:"+uri);
            controller(req,res,shareableObject);
            
        });  
            
        break;
            
    }
    
}