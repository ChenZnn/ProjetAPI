    const express = require('express');
    const router = express.Router();
    const jeuController = require('../Controllers/jeuController');

    // Route pour créer un jeu
    router.post('/', jeuController.createJeu);
    
    // Route pour récupérer tous les jeux
    router.get('/', jeuController.getAllJeux);

    // Route pour récupérer un jeu spécifique par ID
    router.get('/:id', jeuController.getJeuById);

    // Route pour mettre à jour un jeu par ID
    router.put('/:id', jeuController.updateJeu);

    // Route pour supprimer un jeu par ID
    router.delete('/:id', jeuController.deleteJeu);

    module.exports = router;
