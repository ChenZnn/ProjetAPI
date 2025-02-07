    const { DataTypes } = require('sequelize');
    const { sequelize } = require('../config/db');

    const User = sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,  // Pas de champs createdAt et updatedAt dans ce modèle.
        tableName: 'utilisateur'
    });

    module.exports = User;
