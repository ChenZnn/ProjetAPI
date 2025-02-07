const Message = require('../models/messageModel'); // Assurez-vous d'importer le modèle Message

exports.createMessage = async (req, res) => {
    try {
        const { Contenu, Date_Envoi, idConversation } = req.body;
        const message = await Message.create({ Contenu, Date_Envoi, idConversation });
        res.status(201).json({ message: 'Message créé avec succès!', data: message });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du message', error: error.message });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message });
    }
};

exports.getMessageById = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findByPk(id);
        if (message) {
            res.status(200).json(message);
        } else {
            res.status(404).json({ message: 'Message non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du message', error: error.message });
    }
};

exports.updateMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const { Contenu, Date_Envoi, idConversation } = req.body;
        const message = await Message.findByPk(id);
        if (message) {
            await message.update({ Contenu, Date_Envoi, idConversation });
            res.status(200).json({ message: 'Message mis à jour avec succès!', data: message });
        } else {
            res.status(404).json({ message: 'Message non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du message', error: error.message });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findByPk(id);
        if (message) {
            await message.destroy();
            res.status(200).json({ message: 'Message supprimé avec succès!' });
        } else {
            res.status(404).json({ message: 'Message non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du message', error: error.message });
    }
};
