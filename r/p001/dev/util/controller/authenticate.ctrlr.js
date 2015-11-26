module.exports = function(req,res){
    console.log(req)
    
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
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(JSON.stringify(obj));

};