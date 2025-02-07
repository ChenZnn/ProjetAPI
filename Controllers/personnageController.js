const Personnage = require('../models/personnageModel');

// Ajouter un personnage
exports.createPersonnage = async (req, res) => {
    const { Nom, Photo, idJeu } = req.body;
    try {
        const personnage = await Personnage.create({ Nom, Photo, idJeu });
        res.status(201).json({ message: "Personnage créé", personnage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du personnage", error });
    }
};

// Obtenir tous les personnages
exports.getAllPersonnages = async (req, res) => {
    try {
        const personnages = await Personnage.findAll();
        res.status(200).json(personnages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des personnages", error });
    }
};

// Obtenir un personnage spécifique
exports.getPersonnageById = async (req, res) => {
    const { id } = req.params;
    try {
        const personnage = await Personnage.findByPk(id);
        if (!personnage) {
            return res.status(404).json({ message: "Personnage non trouvé" });
        }
        res.status(200).json(personnage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération du personnage", error });
    }
};

// Mettre à jour un personnage
exports.updatePersonnage = async (req, res) => {
    const { id } = req.params;
    const { Nom, Photo, idJeu } = req.body;
    try {
        const personnage = await Personnage.findByPk(id);
        if (!personnage) {
            return res.status(404).json({ message: "Personnage non trouvé" });
        }

        personnage.Nom = Nom || personnage.Nom;
        personnage.Photo = Photo || personnage.Photo;
        personnage.idJeu = idJeu || personnage.idJeu;
        
        await personnage.save();
        res.status(200).json({ message: "Personnage mis à jour", personnage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du personnage", error });
    }
};

// Supprimer un personnage
exports.deletePersonnage = async (req, res) => {
    const { id } = req.params;
    try {
        const personnage = await Personnage.findByPk(id);
        if (!personnage) {
            return res.status(404).json({ message: "Personnage non trouvé" });
        }

        await personnage.destroy();
        res.status(200).json({ message: "Personnage supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression du personnage", error });
    }
};
