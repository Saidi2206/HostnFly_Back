const mongoose = require ('mongoose'); 

    const massage = mongoose.model('massage',{ 
    titre :{
        type: String,
        
    }, 
    description  :{
        type: String,
    } ,
    prix  :{
        type: String,
    } ,
    image :{
        type: String,
    }
}); 


module.exports = massage;