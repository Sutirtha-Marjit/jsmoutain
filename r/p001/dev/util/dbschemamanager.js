module.exports = function(schemaConfig,mongoose){
    
    var schemaBundle = [];
    
    if(mongoose!==undefined){ var Schema =  mongoose.Schema; }
    if(Schema!==undefined){
        for(sc in schemaConfig.def){

            console.log("Schema definition configuration started for "+sc);
            try{             
                
                schemaBundle[schemaConfig.def[sc].label] = mongoose.model(schemaConfig.def[sc].label,schemaConfig.def[sc].schema);

            }catch(error){
                
                console.log("Error happening while createing Mongoose.model for "+schemaConfig.def[sc].label);
                
            }

        }
    }
    
    return schemaBundle;
    
};