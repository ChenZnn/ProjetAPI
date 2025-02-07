const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Jeu = sequelize.define('Jeu', {
    idJeu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {  // minuscule
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {  // minuscule
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {  // minuscule
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    tableName: 'jeu',
    timestamps: false,  // Pas besoin de createdAt/updatedAt
});

module.exports = Jeu;
