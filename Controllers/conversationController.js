const Conversation = require('../models/conversationModel');  // Assurez-vous d'importer le modèle Conversation
// Créer une nouvelle conversation
exports.createConversation = async (req, res) => {
    try {
        const { DateConversation, Prompt, idUser, idPersonnage } = req.body;

        if (!Prompt || !idUser || !idPersonnage) {
            return res.status(400).json({ message: "Tous les champs obligatoires ne sont pas remplis." });
        }

        const conversation = await Conversation.create({ DateConversation, Prompt, idUser, idPersonnage });
        res.status(201).json({ message: "Conversation créée avec succès.", conversation });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la conversation.", error });
    }
};

// Obtenir toutes les conversations
exports.getAllConversations = async (req, res) => {
    try {
        const conversations = await Conversation.findAll();
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des conversations.", error });
    }
};

// Obtenir une conversation spécifique
exports.getConversationById = async (req, res) => {
    try {
        const { id } = req.params;
        const conversation = await Conversation.findByPk(id);
        if (!conversation) {
            return res.status(404).json({ message: "Conversation non trouvée." });
        }
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la conversation.", error });
    }
};

// Mettre à jour une conversation
exports.updateConversation = async (req, res) => {
    try {
        const { id } = req.params;
        const { DateConversation, Prompt, idUser, idPersonnage } = req.body;

        const conversation = await Conversation.findByPk(id);
        if (!conversation) {
            return res.status(404).json({ message: "Conversation non trouvée." });
        }

        await conversation.update({ DateConversation, Prompt, idUser, idPersonnage });
        res.status(200).json({ message: "Conversation mise à jour avec succès.", conversation });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la conversation.", error });
    }
};

// Supprimer une conversation
exports.deleteConversation = async (req, res) => {
    try {
        const { id } = req.params;

        const conversation = await Conversation.findByPk(id);
        if (!conversation) {
            return res.status(404).json({ message: "Conversation non trouvée." });
        }

        await conversation.destroy();
        res.status(200).json({ message: "Conversation supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la conversation.", error });
    }
};