const express = require('express');
const router = express.Router();
const personnageController = require('../Controllers/personnageController');

// Ajouter un personnage
router.post('/', personnageController.createPersonnage);

// Récupérer tous les personnages
router.get('/', personnageController.getAllPersonnages);

// Récupérer un personnage spécifique
router.get('/:id', personnageController.getPersonnageById);

// Mettre à jour un personnage
router.put('/:id', personnageController.updatePersonnage);

// Supprimer un personnage
router.delete('/:id', personnageController.deletePersonnage);

module.exports = router;
