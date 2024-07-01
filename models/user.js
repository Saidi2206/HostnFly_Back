    const mongoose = require ('mongoose'); 

        const User = mongoose.model('User',{ 
        Nom :{
            type: String,
            
        }, 
        Prenom  :{
            type: String,
        } ,
        Email  :{
            type: String,
        } ,
        Telephone :{
            type: String,
        }, 
        Mot_de_passe :{
            type: String,
        } ,
        Role: {
            type: String,
            enum: ['voyageur', 'hote'],
            required: true
        },
        Service_a_offrir: {
            type: String,
        }
    }, 

); 
    module.exports = User;