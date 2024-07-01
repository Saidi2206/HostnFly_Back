const express = require('express');
const Router = express.Router();
const Chauffeur = require('../models/chauffeur');


Router.post('/create_chauffeur', async (req, res) => {
    try {
      data = req.body;
      newChauffeur = new Chauffeur(data);
      savedChauffeur = await newChauffeur.save();
      res.status(200).json(savedChauffeur);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du Chauffeur :', err);
      res.status(500).send('Erreur lors de l\'enregistrement du Chauffeur');
    }
  });
  Router.get('/get_all_chauffeur', async (req, res) => {
    try {
      chauffeur = await Chauffeur.find();
      res.status(200).json(chauffeur);
    } catch (err) {
      console.error('Erreur lors de obtenir des chauffeur :', err);
      res.status(500).send('Erreur lors de obtenir des chauffeur');
    }
  });
  Router.get('/get_chauffeur_by_id/:id', async (req, res) => {
    try { 
        id = req.params.id;
        chauffeur = await Chauffeur.findById({_id: id});
      res.status(200).json(chauffeur);
    } catch (err) {
      console.error('Erreur lors de obtenir du chauffeur :', err);
      res.status(500).send('Erreur lors de obtenir du chauffeur');
    }
  }); 
  Router.delete('/delete_chauffeur/:id', async(req,res)=>{
    try { 
        id = req.params.id;
        chauffeur = await Chauffeur.findByIdAndDelete({_id: id});
        res.status(200).json(chauffeur);
    } catch (err) {
      console.error('Erreur lors de la suppressio du chauffeur :', err);
      res.status(500).send('Erreur lors de la suppressio du chauffeur');
    }

  });
  Router.put('/update_chauffeur/:id', async (req, res) => {
    try {
      id = req.params.id;
      newchauffeur = req.body;
      chauffeur = await Chauffeur.findByIdAndUpdate({_id: id},newchauffeur);
      res.status(200).json(chauffeur);
    } catch (err) {
      console.error('Erreur lors de la modification du chauffeur :', err);
      res.status(404).send('Erreur lors de la modification du chauffeur');
    }
  });


module.exports = Router;