const express = require('express');
const Router = express.Router();
const Chef = require('../models/chef');
const multer = require('multer'); 


filename = '';

const mystorage = multer.diskStorage({
  destination: './services/chef', 
  filename: function (req, file, redirect) {
      let date = Date.now();
      let fl = date + '.' + file.mimetype.split('/')[1];
      redirect(null,fl); 
      filename = fl ;

  }
});
const upload = multer ({storage:mystorage});

Router.post('/create_chef',upload.any('image') , async (req, res) => {
    try {
      data = req.body;
      newchef = new Chef(data);
      newchef.image=filename;
      savedChef = await newchef.save();
      filename='';
      res.status(200).json(savedChef);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du chef :', err);
      res.status(500).send('Erreur lors de l\'enregistrement du chef');
    }
  });
  Router.get('/get_all_chef', async (req, res) => {
    try {
      chef = await Chef.find();
      res.status(200).json(chef);
    } catch (err) {
      console.error('Erreur lors de obtenir des chef :', err);
      res.status(500).send('Erreur lors de obtenir des chef');
    }
  });
  Router.get('/get_chef_by_id/:id', async (req, res) => {
    try { 
      id = req.params.id;
      chef = await Chef.findById({_id: id});
      res.status(200).json(chef);
    } catch (err) {
      console.error('Erreur lors de obtenir du chef :', err);
      res.status(500).send('Erreur lors de obtenir du chef');
    }
  }); 
  Router.delete('/delete_chef/:id', async(req,res)=>{
    try { 
        id = req.params.id;
        chef = await Chef.findByIdAndDelete({_id: id});
        res.status(200).json(chef);
    } catch (err) {
      console.error('Erreur lors de la suppressio du chef :', err);
      res.status(500).send('Erreur lors de la suppressio du chef');
    }

  });
  Router.put('/update_chef/:id',upload.any('image'), async (req, res) => {
    try {
      id = req.params.id;
      newchef = req.body;
      newchef.image=filename;
      chef = await Chef.findByIdAndUpdate({_id: id},newchef );
      filename='';
      res.status(200).json(chef);
    } catch (err) {
      console.error('Erreur lors de la modification du chef :', err);
      res.status(404).send('Erreur lors de la modification du chef');
    }
  });


module.exports = Router;