module.exports = function(req,res){
    
    var userType = req.body.type;
    var obj = {
    	name:"Resource Management 1.0>authenticate",
    	routeName:"authenticate",
    	date:new Date(),
    	data:{
    		success:true,
    		error:{},
    		message:"You have logged on successfully"
    	}
    };
    switch(userType){
        
        case "resource":
        if(adminValidation(req.body)){
           obj.data.success = true; 
        }else{
            obj.data.success = false; 
        }
        break;        
        
        case "admin":
        resourceValidation(req.body);
        break;
        
        case "superadmin":
        superAdminValidation(req.body);
        break;        
    }
    
    function adminValidation(params){
        if(params.username === 'sutirtha' && params.password === '1234'){
            return true;
        }
        return false;
    }
    
    function superAdminValidation(params){
        if(params.username === 'sutirtha' && params.password === '1234'){
            return true;
        }
        return false;
    }
    
    function resourceValidation(params){
        if(params.username === 'sutirtha' && params.password === '1234'){
            return true;
        }
        return false;
    }

    
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(JSON.stringify(obj));
    
};