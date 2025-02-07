const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Conversation = sequelize.define('Conversation', {
    idConversation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    DateConversation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    Prompt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idPersonnage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'conversation',
    timestamps: false, // Désactive createdAt et updatedAt
});

module.exports = Conversation;