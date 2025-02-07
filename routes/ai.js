const express = require('express');
const aiService = require('../utils/aiService');
const router = express.Router();

router.use(express.json());

router.post('/generate-image', async (req, res) => {
    const { nom, description, source } = req.body; // On peut choisir OpenAI ou Replicate via `source`

    try {
        let imageUrl;
        
        if (source === 'replicate') {
            imageUrl = await aiService.generateImageReplicate(nom, description);
        } else {
            return res.status(400).json({ error: 'Service non valide' });
        }

        if (imageUrl) {
            res.status(200).json({ imageUrl });
        } else {
            console.error('Erreur lors de la génération de l\'image: Aucune image générée');
            res.status(500).json({ error: 'Erreur lors de la génération de l\'image.' });
        }
    } catch (error) {
        console.error('Erreur lors de la création du jeu:', error);
        res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
});


module.exports = router;
