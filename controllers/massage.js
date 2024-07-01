const express = require('express');
const Router = express.Router();
const Massage = require('../models/massage');
const multer = require('multer'); 


filename = '';

const mystorage = multer.diskStorage({
  destination: './services/massage', 
  filename: function (req, file, redirect) {
      let date = Date.now();
      let fl = date + '.' + file.mimetype.split('/')[1];
      redirect(null,fl); 
      filename = fl ;

  }
});
const upload = multer ({storage:mystorage});

Router.post('/create_massage',upload.any('image') , async (req, res) => {
    try {
      data = req.body;
      newmassage = new Massage(data);
      newmassage.image=filename;
      savedmassage = await newmassage.save();
      filename='';
      res.status(200).json(savedmassage);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du massage :', err);
      res.status(500).send('Erreur lors de l\'enregistrement du massage');
    }
  });
  Router.get('/get_all_massage', async (req, res) => {
    try {
      massage = await Massage.find();
      res.status(200).json(massage);
    } catch (err) {
      console.error('Erreur lors de obtenir des massage :', err);
      res.status(500).send('Erreur lors de obtenir des massage');
    }
  });
  Router.get('/get_massage_by_id/:id', async (req, res) => {
    try { 
        id = req.params.id;
        massage = await Massage.findById({_id: id});
      res.status(200).json(massage);
    } catch (err) {
      console.error('Erreur lors de obtenir du massage :', err);
      res.status(500).send('Erreur lors de obtenir du massage');
    }
  }); 
  Router.delete('/delete_massage/:id', async(req,res)=>{
    try { 
        id = req.params.id;
        massage = await Massage.findByIdAndDelete({_id: id});
        res.status(200).json(massage);
    } catch (err) {
      console.error('Erreur lors de la suppressio du massage :', err);
      res.status(500).send('Erreur lors de la suppressio du massage');
    }

  });
  Router.put('/update_massage/:id',upload.any('image'),  async (req, res) => {
    try {
      id = req.params.id;
      newmassage = req.body;
      newmassage.image=filename;
      massage = await Massage.findByIdAndUpdate({_id: id},newmassage );
      filename='';
      res.status(200).json(massage);
    } catch (err) {
      console.error('Erreur lors de la modification du massage :', err);
      res.status(404).send('Erreur lors de la modification du massage');
    }
  });


module.exports = Router;