module.exports = function(req,res){
	
	//var obj = req.body;
	var obj = {registrationStatus:'success'};
	
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type','application/json');
	res.send(JSON.stringify(obj));
};