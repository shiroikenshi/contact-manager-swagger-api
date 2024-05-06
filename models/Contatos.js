const { DataTypes } = require("sequelize");

const sequelize = require('../db');

const Contato = sequelize.define("Contato", {
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    telefone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true,
        },
    }
},{
    timestamps:true,
});

module.exports = Contato;