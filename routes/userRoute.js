const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Ajouter un utilisateur
router.post('/register', userController.createUser);

// Connexion d'un utilisateur
router.post('/login', userController.loginUser);

// Obtenir tous les utilisateurs
router.get('/', userController.getAllUsers);

// Obtenir un utilisateur spécifique
router.get('/:id', userController.getUserById);

// Mettre à jour un utilisateur
router.put('/:id', userController.updateUser);

// Supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;
