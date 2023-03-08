const { DataTypes } = require('sequelize');
const connection = require('./dataBase');

const Pergunta = connection.define('perguntas',{
    titulo:{
        type:DataTypes.STRING, 
        allowNull:false,
    },
    descricao:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
});

Pergunta.sync({force:false});

module.exports = Pergunta;