const Jeu = require('../models/jeuModel');
const axios = require('axios');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const { generateImage } = require('../utils/aiService');

exports.createJeu = async (req, res) => {
    const { nom, description } = req.body;

    try {
        // Création du jeu dans la base de données
        const jeu = await Jeu.create({
            nom,
            description,
            image: '' // Valeur temporaire
        });

        // Génération de l'image
        const imageUrl = await generateImage(nom, description);
        if (!imageUrl) {
            return res.status(500).json({ error: 'Erreur lors de la génération de l\'image' });
        }

        jeu.image = imageUrl;
        await jeu.save();

        return res.status(200).json({
            message: 'Jeu créé avec succès et image générée !',
            jeu,
            imageUrl
        });
    } catch (error) {
        console.error('Erreur lors de la création du jeu:', error);
        return res.status(500).json({ error: 'Erreur lors de la création du jeu.' });
    }
};

// Fonction pour générer une image via l'API d'IA
async function generateImageUrl(nom, description) {
    const prompt = `Jeu : ${nom}. Description : ${description}`;

    try {
        const response = await axios.post(
            'http://localhost:3000/api/ai/generate-image', // URL de ton endpoint IA
            { prompt },
            { headers: { 'Content-Type': 'application/json' } }
        );

        return response.data.imageUrl;  // Récupère l'URL de l'image générée
    } catch (error) {
        console.error('Erreur lors de la génération de l\'image:', error);
        throw new Error('Erreur lors de la génération de l\'image');
    }
};

// Autres fonctions pour gérer les jeux
exports.getAllJeux = async (req, res) => {
    try {
        const jeux = await Jeu.findAll();
        res.status(200).json(jeux);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des jeux', error });
    }
};

// Lire un jeu par ID
exports.getJeuById = async (req, res) => {
    try {
        const jeuId = req.params.id;

        if (isNaN(jeuId)) {
            return res.status(400).json({ message: 'ID invalide' });
        }

        const jeu = await Jeu.findByPk(jeuId);
        if (!jeu) {
            return res.status(404).json({ message: 'Jeu non trouvé' });
        }
        res.status(200).json(jeu);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du jeu', error });
    }
};

// Mise à jour du jeu
exports.updateJeu = async (req, res) => {
    try {
        const { nom, image, description } = req.body;
        const jeuId = req.params.id;

        if (isNaN(jeuId)) {
            return res.status(400).json({ message: 'ID invalide' });
        }

        const jeu = await Jeu.findByPk(jeuId);
        if (!jeu) {
            return res.status(404).json({ message: 'Jeu non trouvé' });
        }

        await jeu.update({
            nom,       // Harmonisation avec les noms en minuscule
            image,     // Harmonisation avec les noms en minuscule
            description
        });

        res.status(200).json({ message: 'Jeu mis à jour avec succès', jeu });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du jeu', error });
    }
};

// Suppression du jeu
exports.deleteJeu = async (req, res) => {
    try {
        const jeuId = req.params.id;

        if (isNaN(jeuId)) {
            return res.status(400).json({ message: 'ID invalide' });
        }

        const jeu = await Jeu.findByPk(jeuId);
        if (!jeu) {
            return res.status(404).json({ message: 'Jeu non trouvé' });
        }

        await jeu.destroy();

        res.status(200).json({ message: 'Jeu supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du jeu', error });
    }
};
