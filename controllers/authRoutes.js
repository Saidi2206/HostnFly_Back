

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const salt = bcrypt.genSaltSync(10);
    const cryptedPass = bcrypt.hashSync(data.Mot_de_passe, salt);
    newUser.Mot_de_passe = cryptedPass;
    
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send('Erreur lors de l\'enregistrement de l\'utilisateur');
  }
});

router.post('/login', async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ Email: data.Email });
    
    if (!user) {
      return res.status(404).send('Email is invalid!');
    }

    const validPass = bcrypt.compareSync(data.Mot_de_passe, user.Mot_de_passe);
    
    if (!validPass) {
      return res.status(401).send('password is invalid!');
    }

    const payload = {
      id: user._id,
      Email: user.Email,
      Nom: user.Nom
    };
    
    const token = jwt.sign(payload, 'aa'); 
    
    return res.status(200).send({ mytoken: token });
  } catch (error) {
    console.error(error);
    return res.status(500).send('An error occurred during login');
  }
});

module.exports = router;
