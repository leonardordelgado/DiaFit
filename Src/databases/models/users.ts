import {Sequelize, DataTypes } from 'sequelize';
import DbUser from '../DbUser';

const _db = new DbUser().getSequelize();

const User = _db.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER, 
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SobreNome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},{
    timestamps:false
});



export default User;
