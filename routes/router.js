const express = require('express');
const userRoute = require('../controllers/user');
const chefRoute = require('../controllers/chef');
const massageRoute = require('../controllers/massage');
const chauffeurRoute = require('../controllers/chauffeur');
const formRoute = require('../controllers/formulaire_massage');
const authRoutes = require('../controllers/authRoutes');

const router = express.Router();

router.use('/user', userRoute);
router.use('/chef', chefRoute);
router.use('/massage', massageRoute);
router.use('/chauffeur', chauffeurRoute);
router.use('/form', formRoute);
router.use('/auth', authRoutes);
router.use('/get_massage_image', express.static('./services/massage'));
router.use('/get_chef_image', express.static('./services/chef'));
router.use('/get_chauffeur_image', express.static('./services/chauffeur'));



module.exports = router;
