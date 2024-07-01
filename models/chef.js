const mongoose = require ('mongoose'); 

const Chef = mongoose.model('Chef',{ 
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


module.exports = Chef;