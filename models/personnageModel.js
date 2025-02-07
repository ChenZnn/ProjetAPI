const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Personnage = sequelize.define('Personnage', {
    idPersonnage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idJeu: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,  // Pas besoin de champs createdAt, updatedAt pour ce modèle.
    tableName: 'personnage'
});

module.exports = Personnage;
