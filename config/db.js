const { Sequelize } = require('sequelize');
require('dotenv').config();

// Créez l'URL de connexion complète
const dbUrl = process.env.DB_URL || 'mysql://root:@localhost:3306/apiopenai'; // Modifiez selon votre .env

// Créez l'instance Sequelize avec l'URL directement
const sequelize = new Sequelize(dbUrl, {
  dialect: 'mysql',
  logging: console.log, // Pour afficher les requêtes SQL si nécessaire
});


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à MySQL réussie !');
    } catch (error) {
        console.error('Erreur de connexion à MySQL :', error.message);
        process.exit(1); // Arrêter l'application en cas d'échec
    }
};

module.exports = { sequelize, connectDB };
