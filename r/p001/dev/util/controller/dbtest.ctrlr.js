module.exports = function(req,res){
    
    var obj = {
    	name:"Resource Management 1.0>DB TEST",
    	routeName:"info",
    	date:new Date(),
    	data:{
    		success:true,
    		error:{},
    		message:"Application"
    	}
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(JSON.stringify(obj));

};