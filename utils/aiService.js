const fetch = require('node-fetch');
require('dotenv').config();

exports.generateImageReplicate = async (nom, description) => {
    const versionId = "stable-diffusion-v2.1"; // Remplace par le bon ID si nécessaire
    const apiKey = process.env.REPLICATE_API_TOKEN;  // Utilisation de la clé API Replicate
    const prompt = `A highly detailed artistic representation of a game called "${nom}". Description: ${description}`;

    try {
        // Appel à l'API Replicate pour Stable Diffusion
        const response = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${apiKey}`,  // Envoi de la clé API Replicate
            },
            body: JSON.stringify({
                versionId: versionId,  // ID du modèle stable diffusion version 1.4
                input: { prompt },  // Le prompt à passer à Stable Diffusion
            }),
        });

        const result = await response.json();

        if (result.output && result.output.length > 0) {
            return result.output[0];  // Retourne l'URL de l'image générée
        } else {
            console.error('Erreur API Replicate :', result.error || 'Aucune image générée');
            return null;
        }
    } catch (error) {
        console.error('Erreur lors de l\'appel à Replicate :', error);
        return null;
    }
};
