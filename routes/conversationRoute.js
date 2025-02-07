const express = require('express');
const router = express.Router();
const conversationController = require('../Controllers/conversationController');  // Import du contrôleur des conversations

// Route pour créer une conversation
router.post('/', conversationController.createConversation);

// Route pour récupérer toutes les conversations
router.get('/', conversationController.getAllConversations);

// Route pour récupérer une conversation par ID
router.get('/:id', conversationController.getConversationById);

// Route pour mettre à jour une conversation
router.put('/:id', conversationController.updateConversation);

// Route pour supprimer une conversation
router.delete('/:id', conversationController.deleteConversation);

module.exports = router;router.post('/conversations', conversationController.createConversation);

// Route pour récupérer toutes les conversations
router.get('/conversations', conversationController.getAllConversations);

// Route pour récupérer une conversation par ID
router.get('/conversations/:id', conversationController.getConversationById);

// Route pour mettre à jour une conversation par ID
router.put('/conversations/:id', conversationController.updateConversation);

// Route pour supprimer une conversation par ID
router.delete('/conversations/:id', conversationController.deleteConversation);

module.exports = router;
