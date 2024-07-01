const mongoose = require('mongoose') ;
mongoose.connect('mongodb+srv://ihebsaidi:iheb.2023@cluster0.kmsws5t.mongodb.net/Hostnfly')
     .then(
            ()=>{
                console.log("Connexion à MongoDB réussie")
            }
        )
        .catch(
            (err)=>{
                console.error("Erreur de connexion à MongoDB :", err)
            }
        )

module.exports=mongoose;