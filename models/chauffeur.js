const mongoose = require ('mongoose'); 

const Chauffeur = mongoose.model('Chauffeur',{ 
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


module.exports = Chauffeur;