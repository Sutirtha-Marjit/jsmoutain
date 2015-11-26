module.exports = function(req,res){
    
    var obj = {
    	name:"Resource Management 1.0>root",
    	routeName:"root",
    	date:new Date(),
    	data:null
    };
    res.header('Content-Type','application/json');
	res.send(JSON.stringify(obj));

};