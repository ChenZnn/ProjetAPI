const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Message = sequelize.define('Message', {
    idMessage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Contenu: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Date_Envoi: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    idConversation: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Message',
    timestamps: false
});

module.exports = Message;

