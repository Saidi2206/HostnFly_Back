const express = require('express');
const Router = express.Router();
const formulaire = require('../models/formulaire_massage');


Router.post('/create_forms', async (req, res) => {
    try {
      data = req.body;
      newform = new formulaire(data);
      savedform = await newform.save();
      res.status(200).json(savedform);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du form :', err);
      res.status(500).send('Erreur lors de l\'enregistrement du form');
    }
  });
  Router.get('/get_all_form', async (req, res) => {
    try {
        form = await formulaire.find();
      res.status(200).json(form);
    } catch (err) {
      console.error('Erreur lors de obtenir des form :', err);
      res.status(500).send('Erreur lors de obtenir des form');
    }
  });
  Router.get('/get_form_by_id/:id', async (req, res) => {
    try { 
        id = req.params.id;
        form = await formulaire.findById({_id: id});
      res.status(200).json(form);
    } catch (err) {
      console.error('Erreur lors de obtenir du form :', err);
      res.status(500).send('Erreur lors de obtenir du form');
    }
  }); 
  Router.delete('/delete_form/:id', async(req,res)=>{
    try { 
        id = req.params.id;
        form = await formulaire.findByIdAndDelete({_id: id});
        res.status(200).json(form);
    } catch (err) {
      console.error('Erreur lors de la suppressio du form :', err);
      res.status(500).send('Erreur lors de la suppressio du form');
    }

  });
  Router.put('/update_form/:id', async (req, res) => {
    try {
      id = req.params.id;
      newform = req.body;
      form = await formulaire.findByIdAndUpdate({_id: id},newform );
      res.status(200).json(form);
    } catch (err) {
      console.error('Erreur lors de la modification du form :', err);
      res.status(404).send('Erreur lors de la modification du form');
    }
  });


module.exports = Router;