const mongoose = require ('mongoose'); 


const dureeOptions = ["30min", "une heure", "2h", "3h"];


const Formulaire_massage = mongoose.model('Formulaire_massage',{ 
    date :{
        type: String,
     },
    duree :{
       type: String,
       enum: dureeOptions,   
    }, 
    servicetype  :{
       type: String,
    } ,
    paiement :{
       type: String,
    } 
  
}); 


module.exports = Formulaire_massage;