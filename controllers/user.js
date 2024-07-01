
const express = require('express');
const Router = express.Router();
const User = require('../models/user');

Router.post('/create_user', async (req, res) => {
    try {
      data = req.body;
      newUser = new User(data);
      savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du utilisateur :', err);
      res.status(500).send('Erreur lors de l\'enregistrement du utilisateur');
    }
  });
  Router.get('/get_all_user', async (req, res) => {
    try {
      user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      console.error('Erreur lors de obtenir des utilisateurs :', err);
      res.status(500).send('Erreur lors de obtenir des utilisateurs');
    }
  });
  Router.get('/get_user_by_id/:id', async (req, res) => {
    try { 
        id = req.params.id;
        user = await User.findById({_id: id});
      res.status(200).json(user);
    } catch (err) {
      console.error('Erreur lors de obtenir du utilisateur :', err);
      res.status(500).send('Erreur lors de obtenir du utilisateur');
    }
  }); 
  Router.delete('/delete_user/:id', async(req,res)=>{
    try { 
        id = req.params.id;
        user = await User.findByIdAndDelete({_id: id});
        res.status(200).json(user);
    } catch (err) {
      console.error('Erreur lors de la suppressio du utilisateur :', err);
      res.status(500).send('Erreur lors de la suppressio du utilisateur');
    }

  });
  Router.put('/update_user/:id', async (req, res) => {
    try {
      id = req.params.id;
      newUser = req.body;
      user = await User.findByIdAndUpdate({_id: id},newUser );
      res.status(200).json(User);
    } catch (err) {
      console.error('Erreur lors de la modification du utilisateur :', err);
      res.status(404).send('Erreur lors de la modification du utilisateur');
    }
  });

 module.exports = Router;