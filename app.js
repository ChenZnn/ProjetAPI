const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Si vous avez besoin de gérer des requêtes cross-origin
const path = require('path');
const { sequelize } = require('./config/db');
const authenticateToken = require('./middleware/authMiddleware');


// Initialisation de l'application Express
const app = express();

// Middleware pour parser les requêtes en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Correct middleware pour parser le JSON

// Middleware pour autoriser les requêtes cross-origin (optionnel)
app.use(cors());

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')))

// Route par défaut pour tester si l'API est en ligne
app.get('/', (req, res) => {
    res.send('API en fonctionnement');
});

// Route pour afficher la page de création d'utilisateur
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/add-jeu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','addJeu.html'));
});


// Import des routes
const userRoutes = require('./routes/userRoute');
const personnageRoutes = require('./routes/personnageRoute');
const messageRoutes = require('./routes/messageRoute');
const jeuRoutes = require('./routes/jeuRoute');
const conversationRoutes = require('./routes/conversationRoute');
const aiRoutes = require('./routes/ai');


// Utilisation des routes pour les différentes entités
app.use('/api/users', userRoutes);
app.use('/api/personnages', personnageRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/jeux', jeuRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/ai', aiRoutes);


// Définir le port sur lequel le serveur écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

// Synchroniser les modèles avec la base de données (création des tables)
sequelize.sync().then(() => {
    console.log('Tables créées ou mises à jour');
}).catch((error) => {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données', error);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
});